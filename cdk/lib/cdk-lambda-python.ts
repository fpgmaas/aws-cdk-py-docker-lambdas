import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {aws_lambda as lambda } from 'aws-cdk-lib';
import * as path from 'path';

export class CdkLambdaPythonStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new lambda.DockerImageFunction(this, 'AssetFunction_1', {
      code: lambda.DockerImageCode.fromImageAsset(
        path.join(__dirname, '../../python'),
        {
          cmd : ["lambda_1.index.handler"]
        }
      )
    });

  new lambda.DockerImageFunction(this, 'AssetFunction_2', {
      code: lambda.DockerImageCode.fromImageAsset(
        path.join(__dirname, '../../python'),
        {
          cmd : ["lambda_2.index.handler"]
        }
      )
    });
}
}