import AWS from "aws-sdk";
import { dynamo } from "./dynamo";
import { s3 } from "./s3";

type ClientReturn = {
  s3: AWS.S3;
  dynamodb: AWS.DynamoDB.DocumentClient;
};

export const configuredClients = (region: string): ClientReturn => {
  AWS.config.update({
    region
  });

  return {
    s3,
    dynamodb: dynamo
  };
};
