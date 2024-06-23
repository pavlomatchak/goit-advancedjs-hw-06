/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Weekdays {
  mon = 'Monday',
  tue = 'Tuesday',
  wed = 'Wednesday',
  thr = 'Thursday',
  fr = 'Friday',
}

enum Weekend {
  sat = 'Saturday',
  sun = 'Sunday',
}

function isWeekend(day: Weekdays | Weekend): boolean {
  return day in Weekend;
}
