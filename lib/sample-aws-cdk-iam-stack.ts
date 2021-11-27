import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';


import { Construct, Stack, StackProps, CfnOutput }  from '@aws-cdk/core';
import { Group, Policy, PolicyStatement, User, CfnAccessKey } from '@aws-cdk/aws-iam';

const groupName = 'developers';
const userNames = ['User01', 'User02', 'User03'];

export class HelloCdkStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new s3.Bucket(this, 'MyFirstBucket', {
      versioned: true
    });
  }
}
export class CdkLessonStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // ポリシーステートメントの定義
    const policyStatement = new PolicyStatement({
      actions: ["*"],
      resources: ["*"]
    })

    // ポリシーの定義
    const policyName = 'AllowAnything';
    const policy = new Policy(this, policyName, { 
      policyName,
      statements: [policyStatement],
    });

    // グループの定義
    const group = new Group(this, groupName, { groupName });
    group.attachInlinePolicy(policy);

    // ユーザとアクセスキーの定義
    userNames.map((userName) => {
      const user = new User(this, userName, { userName, groups: [group] });
      const key = new CfnAccessKey(this, `${userName}Key`, { userName: user.userName });
      new CfnOutput(this, `${userName}AccessKey`, { value: key.ref });
      new CfnOutput(this, `${userName}SecretAccessKey`, { value: key.attrSecretAccessKey });
    })
  }
}