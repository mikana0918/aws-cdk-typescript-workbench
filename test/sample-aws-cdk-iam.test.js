"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { Template } from '@aws-cdk/assertions';
const cdk = require("@aws-cdk/core");
// import * as SampleAwsCdkIam from '../lib/sample-aws-cdk-iam-stack';
// example test. To run these tests, uncomment this file along with the
// example resource in lib/sample-aws-cdk-iam-stack.ts
test('SQS Queue Created', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new SampleAwsCdkIam.SampleAwsCdkIamStack(app, 'MyTestStack');
    // THEN
    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::SQS::Queue', {
        VisibilityTimeout: 300
    });  
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FtcGxlLWF3cy1jZGstaWFtLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzYW1wbGUtYXdzLWNkay1pYW0udGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGtEQUFrRDtBQUNsRCxxQ0FBcUM7QUFDckMsc0VBQXNFO0FBRXRFLHVFQUF1RTtBQUN2RSxzREFBc0Q7QUFDdEQsSUFBSSxDQUFDLG1CQUFtQixFQUFFLEdBQUcsRUFBRTtJQUM3QixNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUN4QixPQUFPO0lBQ1QsTUFBTSxLQUFLLEdBQUcsSUFBSSxlQUFlLENBQUMsb0JBQW9CLENBQUMsR0FBRyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ3pFLE9BQU87SUFDVCxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRTNDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxpQkFBaUIsRUFBRTtRQUNoRCxpQkFBaUIsRUFBRSxHQUFHO0tBQ3ZCLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgVGVtcGxhdGUgfSBmcm9tICdAYXdzLWNkay9hc3NlcnRpb25zJztcbmltcG9ydCAqIGFzIGNkayBmcm9tICdAYXdzLWNkay9jb3JlJztcbi8vIGltcG9ydCAqIGFzIFNhbXBsZUF3c0Nka0lhbSBmcm9tICcuLi9saWIvc2FtcGxlLWF3cy1jZGstaWFtLXN0YWNrJztcblxuLy8gZXhhbXBsZSB0ZXN0LiBUbyBydW4gdGhlc2UgdGVzdHMsIHVuY29tbWVudCB0aGlzIGZpbGUgYWxvbmcgd2l0aCB0aGVcbi8vIGV4YW1wbGUgcmVzb3VyY2UgaW4gbGliL3NhbXBsZS1hd3MtY2RrLWlhbS1zdGFjay50c1xudGVzdCgnU1FTIFF1ZXVlIENyZWF0ZWQnLCAoKSA9PiB7XG4gIGNvbnN0IGFwcCA9IG5ldyBjZGsuQXBwKCk7XG4gICAgLy8gV0hFTlxuICBjb25zdCBzdGFjayA9IG5ldyBTYW1wbGVBd3NDZGtJYW0uU2FtcGxlQXdzQ2RrSWFtU3RhY2soYXBwLCAnTXlUZXN0U3RhY2snKTtcbiAgICAvLyBUSEVOXG4gIGNvbnN0IHRlbXBsYXRlID0gVGVtcGxhdGUuZnJvbVN0YWNrKHN0YWNrKTtcblxuICB0ZW1wbGF0ZS5oYXNSZXNvdXJjZVByb3BlcnRpZXMoJ0FXUzo6U1FTOjpRdWV1ZScsIHtcbiAgICBWaXNpYmlsaXR5VGltZW91dDogMzAwXG4gIH0pO1xufSk7XG4iXX0=