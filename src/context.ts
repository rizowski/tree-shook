import * as aws from "./lib/aws";
import * as math from "./lib/math";

export const createContext = () => {
  const { s3, dynamodb } = aws.configuredClients("us-east-1");

  return {
    s3,
    dynamodb,
    math
  };
};
