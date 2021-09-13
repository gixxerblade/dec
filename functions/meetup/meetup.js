const { parse } = require("rss-to-json")
// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method

exports.handler = async (event, context, callback) => {
  let page = 0
  try {
    const response = await parse("https://www.meetup.com/Down-East-Cyclists/events/rss/")
    return {
      statusCode: 200,
      body: JSON.stringify(response.items),
      data: JSON.stringify(response.items)
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}
