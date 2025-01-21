#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { PipelineTestStack } from '../lib/pipeline-test-stack';

const app = new cdk.App();

const account = process.env.CDK_DEFAULT_ACCOUNT;
const region = process.env.CDK_DEFAULT_REGION || 'eu-west-1';

new PipelineTestStack(app, 'PipelineTestStack', {
  env: { account, region }
});