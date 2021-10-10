import { CalendarEvent, Utils } from "./utils"
import fetch from 'node-fetch'

type Key = keyof CalendarEvent
type Values = CalendarEvent[Key]

// const url = 'https://calendar.google.com/calendar/ical/ar3ko14lv0eeeg9uqmnqktlg49pahtmb%40import.calendar.google.com/public/basic.ics';

export const calendar = async (url?: string): Promise<CalendarEvent[]> => {
  const result = await fetch(url)
  const data = await result.text()
  const dataArr: string[] = data.split("\r\n")
  const event: CalendarEvent = {
    startTime: undefined,
    endTime: undefined,
    url: "",
    description: "",
    location: "",
    title: "",
    id: "",
  } as const
  const events: CalendarEvent[] = []
  const eventMap: { [key: string]: string } = {
    DTSTART: "startTime",
    DTEND: "endTime",
    URL: "url",
    DESCRIPTION: "description",
    LOCATION: "location",
    SUMMARY: "title",
    UID: "id",
  }
  dataArr.forEach((line: string) => {
    const colon = line.indexOf(":")
    let key: PropertyKey, value: Values
    ;[key, value] = [line.slice(0, colon), line.slice(colon + 1)]
    if (key === "END") {
      events.push({ ...event })
    } else if (eventMap.hasOwnProperty(key)) {
      if (Utils.validateDate(value)) value = Utils.parseDate(value)
      event[eventMap[key]] = value as unknown as CalendarEvent
    }
  })
  return events
}