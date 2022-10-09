#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkLambdaPythonStack } from '../lib/cdk-lambda-python-stack';

const app = new cdk.App();
new CdkLambdaPythonStack(app, 'CdkLambdaPythonStack', {

});