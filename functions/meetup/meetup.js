// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const fetch = require('node-fetch')
const MEETUP_API_ENDPOINT = 'https://api.meetup.com/Down-East-Cyclists/'

const query = ``

const handler = async (event, context, callback) => {
  let page = 0
  try {
    const response = await fetch(`${MEETUP_API_ENDPOINT}`)
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello ${subject}` }),
      // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
