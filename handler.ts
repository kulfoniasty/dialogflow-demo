import { APIGatewayProxyEvent } from "aws-lambda";

let counter = 0;
const cities = [
    "Conventry",
    "Wrocław",
    "Frankfurt"
]
export const handle = async (event: APIGatewayProxyEvent) => {
  console.log(event.body);
  counter = (counter + 1) % cities.length;
  return {
    statusCode: 200,
    body: JSON.stringify({
      fulfillmentText: cities[counter],
    }),
  };
};
