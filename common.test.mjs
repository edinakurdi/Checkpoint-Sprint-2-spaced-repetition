// import { getUserIds } from "./common.mjs";
//todo - check if above will be used, otherwise delete
import assert from "node:assert";
import test from "node:test";
import { calculateRevisionDates } from "./common.mjs";

// test("User count is correct", () => {
//   assert.equal(getUserIds().length, 5);
// }); //todo delete

test("calculateRevisionDates() - handles normal days", () => {
  const output = calculateRevisionDates("2026-10-12");

  assert.deepEqual(output, [
    "2026-10-19", // +1 week
    "2026-11-12", // +1 month
    "2027-01-12", // +3 months
    "2027-04-12", // +6 months
    "2027-10-12", // +1 year
  ]);
});

test("calculateRevisionDates() - handles end of month dates", () => {
  const output = calculateRevisionDates("2027-01-31");
  assert.deepEqual(output, [
    "2027-02-07", // +1 week
    "2027-02-28", // +1 month
    "2027-04-30", // +3 months
    "2027-07-31", // +6 months
    "2028-01-31", // +1 year
  ]);
});

test("calculateRevisionDates() - handles leap years", () => {
  const output = calculateRevisionDates("2028-02-29");
  assert.deepEqual(output, [
    "2028-03-07", // +1 week
    "2028-03-29", // +1 month
    "2028-05-29", // +3 months
    "2028-08-29", // +6 months
    "2029-02-28", // +1 year (2029 isn't a leap year)
  ]);
});

test("calculateRevisionDates() -handles daylight saving time changes(clock going forward)", () => {
  const output = calculateRevisionDates("2026-03-28");

  assert.deepEqual(output, [
    "2026-04-04", // +1 week
    "2026-04-28", // +1 month
    "2026-06-28", // +3 months
    "2026-09-28", // +6 months
    "2027-03-28", // +1 year
  ]);
});

test("calculateRevisionDates() - handles clocks going backwards in October", () => {
  const output = calculateRevisionDates("2026-10-24");

  assert.deepEqual(output, [
    "2026-10-31", // +1 week
    "2026-11-24", // +1 month
    "2027-01-24", // +3 months
    "2027-04-24", // +6 months
    "2027-10-24", // +1 year
  ]);
});
