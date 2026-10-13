export function getUserIds() {
  return ["1", "2", "3", "4", "5"];
}

// ========================================
// DATE HELPERS
// ========================================

export function getToday() {
  const today = new Date();
  // new Date() gives a date obj (today's local date)

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  // return string formatted date -> "YYYY-MM-DD"
  return `${year}-${month}-${day}`;
}

export function addDays(date, days) {
  const dateWithAddedDays = new Date(date); //create a copy, so the original isnt modified

  // Update the day on the Date object
  dateWithAddedDays.setUTCDate(dateWithAddedDays.getUTCDate() + days);
  //dateWithAddedDays.getUTCDate() grabs the current day of the month (1-31)
  // setUTCDate() updates the Date obj with the new number - this automatically handles if the number is greater than the days in the months, it rolls.
  // it returns the new date as a timestamp
  return dateWithAddedDays;
}

export function addMonths(date, months) {
  // Extracts the day of the month (1-31) in UTC
  const originalDay = date.getUTCDate();

  // Calculates the future month index (JS automatically handles values over 11)
  const targetMonth = date.getUTCMonth() + months;
  // Extracts the current 4-digit year in UTC
  const targetYear = date.getUTCFullYear();
  // Finds the total days in the target month by grabbing day '0' of the month after it () = last day of the target month)
  const daysInTargetMonth = new Date(
    Date.UTC(targetYear, targetMonth + 1, 0),
  ).getUTCDate();

  // Caps the day to the target month's maximum (prevents Feb 31st, for example)
  const targetDay = Math.min(originalDay, daysInTargetMonth);

  return new Date(Date.UTC(targetYear, targetMonth, targetDay));
}

export function addYears(date, years) {
  return addMonths(date, 12 * years);
}

export function calculateRevisionDates(startDate) {
  const date = new Date(startDate);
  // 1. Create the array of five Date objects
  const revisionDateObjs = [
    addDays(date, 7),
    addMonths(date, 1),
    addMonths(date, 3),
    addMonths(date, 6),
    addYears(date, 1),
  ];
  // 2. Convert them to YYYY-MM-DD strings using map()
  const revisionDates = revisionDateObjs.map(
    (date) => date.toISOString().split("T")[0],
  );
  // 3. Return the array
  return revisionDates;
}
