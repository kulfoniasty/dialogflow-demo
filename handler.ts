import { APIGatewayProxyEvent } from "aws-lambda";

export const handle = async (event: APIGatewayProxyEvent) => {
  console.log(event.body);
  return {
    statusCode: 200,
    body: JSON.stringify({
      fulfillmentText: "response!",
    }),
  };
};
