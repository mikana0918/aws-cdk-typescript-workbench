import { Template } from '@aws-cdk/assertions';
import * as cdk from '@aws-cdk/core';
import { HelloCdkStack, CdkLessonStack } from "@/lib/sample-aws-cdk-iam-stack"

describe("HelloCdkStack", () => {
  test('sample S3 Bucket is created', () => {
    const app = new cdk.App();
      // WHEN
    const stack = new HelloCdkStack(app, 'TestHelloCdkStack');
      // THEN
    const template = Template.fromStack(stack);

    template.hasResource("AWS::S3::Bucket", {
      "Type": "AWS::S3::Bucket",
      "Properties": {
        "VersioningConfiguration": {
          "Status": "Enabled"
        }
      },
      "UpdateReplacePolicy": "Retain",
      "DeletionPolicy": "Retain"
    })
  });
})

describe("CdkLessonStack", () => {
  test("sample IAM role/policy/groups are created and attached", () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CdkLessonStack(app, 'TestCdkLessonStack');
    // THEN
    const template = Template.fromStack(stack);

    console.log(template)

    template.hasResource("AWS::IAM::Policy", {
      "Type": "AWS::IAM::Policy",
      "Properties": {
        "PolicyDocument": {
          "Statement": [
            {
              "Action": "*",
              "Effect": "Allow",
              "Resource": "*"
            }
          ],
          // "Version": "2012-10-17"
        },
        "PolicyName": "AllowAnything",
        // "Groups": [
        //   {
        //     "Ref": "developers4DA91C56"
        //   }
        // ]
      }
    }) 

    template.hasResource("AWS::IAM::Group", {
      "Type": "AWS::IAM::Group",
      "Properties": {
        "GroupName": "developers"
      }
    })

    template.hasResource("AWS::IAM::AccessKey", {
      "Type": "AWS::IAM::AccessKey",
      "Properties": {
        "UserName": {
          "Ref": "User01A9057595"
        }
      }
    })

    template.hasResource("AWS::IAM::User", {
      "Type": "AWS::IAM::User",
      "Properties": {
        "Groups": [
          {
            "Ref": "developers4DA91C56"
          }
        ],
        "UserName": "User01"
      }
    })


    template.hasResource("AWS::IAM::User", {
      "Type": "AWS::IAM::User",
      "Properties": {
        "Groups": [
          {
            "Ref": "developers4DA91C56"
          }
        ],
        "UserName": "User02"
      }
    })


    template.hasResource("AWS::IAM::User", {
      "Type": "AWS::IAM::User",
      "Properties": {
        "Groups": [
          {
            "Ref": "developers4DA91C56"
          }
        ],
        "UserName": "User03"
      }
    })
  })
})