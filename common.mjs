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
  const day = String(today.getDate().padStart(2, "0"));
  // return string formatted date -> "YYYY-MM-DD"
  return `${year}-${month}-${day}`;
}
