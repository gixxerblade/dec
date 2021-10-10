const { calendar } = require("../libs/calendar");
// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const ENDPOINT = 'https://calendar.google.com/calendar/ical/ar3ko14lv0eeeg9uqmnqktlg49pahtmb%40import.calendar.google.com/public/basic.ics';


exports.handler = async (_event, _context, _callback) => {
  let response
  try {
    response = await calendar(ENDPOINT)
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
  return {
    statusCode: 200,
    body: JSON.stringify(response),
    data: JSON.stringify(response),
  }
}
