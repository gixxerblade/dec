export interface CalendarEvent extends Object {
  startTime: Date
  endTime: Date
  url: string
  description: string
  location: string
  title: string
  id: string
}

export enum DateTZIdx {
  T = 8,
  Z = 15,
}

export class Utils {
  static parseDate = (date: string): Date => {
    const year = parseInt(date.substr(0, 4))
    const month = parseInt(date.substr(4, 2), 10) - 1
    const day = parseInt(date.substr(6, 2))
    const hour = parseInt(date.substr(9, 2))
    const minute = parseInt(date.substr(11, 2))
    const second = parseInt(date.substr(13, 2))
    return new Date(Date.UTC(year, month, day, hour, minute, second))
  }

  static validateDate = (val: string): boolean => {
    if (val.length !== 16) return false
    if (val[DateTZIdx.T] !== "T") return false
    if (val[DateTZIdx.Z] !== "Z") return false
    val
      .split("")
      .filter((nums, i) => nums !== DateTZIdx[i])
      .every(num => !isNaN(parseInt(num)))
    return true
  }
}
