import type { APIGatewayProxyEvent } from 'aws-lambda'

module.exports.handler = async (event: APIGatewayProxyEvent) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v3.0! Your function executed successfully!'
    })
  }
}
