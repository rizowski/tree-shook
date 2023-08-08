import { createContext } from "./context";

const { dynamodb, s3, math } = createContext();

math.doSubtraction(2, 1);
math.doSum(1, 2);

dynamodb.get({
  Key: {},
  TableName: ""
});
