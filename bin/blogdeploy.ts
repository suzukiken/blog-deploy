#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { BlogdeployStack } from '../lib/blogdeploy-stack';

const app = new cdk.App();
new BlogdeployStack(app, 'BlogdeployStack', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION }
});
