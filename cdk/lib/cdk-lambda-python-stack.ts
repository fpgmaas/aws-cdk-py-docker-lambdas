import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { aws_lambda as lambda } from 'aws-cdk-lib';
import * as path from 'path';
import { Architecture } from 'aws-cdk-lib/aws-lambda';

export class CdkLambdaPythonStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new lambda.DockerImageFunction(this, 'LambdaFunction_1', {
      code: lambda.DockerImageCode.fromImageAsset(
        path.join(__dirname, '../../python'),
        {
          cmd: ["lambda_1.index.handler"]
        }
      ),
      architecture: Architecture.ARM_64
    });

    new lambda.DockerImageFunction(this, 'LambdaFunction_2', {
      code: lambda.DockerImageCode.fromImageAsset(
        path.join(__dirname, '../../python'),
        {
          cmd: ["lambda_2.index.handler"]
        }
      ),
      architecture: Architecture.ARM_64
    });
  }
}