# Spaced repetition tracker

A small website that helps a user decide which topic to revise next, using spaced repetition (reviewing a topic after increasing gaps of time: one week, one month, three months, six months, one year).

The site is live at: https://edinakurdi.github.io/Checkpoint-Sprint-2-spaced-repetition/

# Built with

HTML, JavaScript, CSS

# What the website does

- Lets you choose a user and view their agenda of topics to revise, in chronological order
- Hides revision dates that are in the past
- Shows a message when the selected user has no agenda
- Lets a user add a new topic using an accessible form (topic name, date picker, submit button)
- Automatically calculates the five revision dates for a new topic: one week, one month, three months, six months and one year from the selected date
- Saves agendas in the browser, so they remain after closing and reopening the website
- Includes unit tests to check that the date calculations work

# How to run it

1. Clone the repo
2. In the project folder, run `npx http-server`
3. Open the address it prints (for example http://127.0.0.1:8080)

## How to test it

Requires Node 18 or later, because the tests use Node's built-in test runner (`node:test`). Tested with Node 24.

Run `npm test`

## Accessibility

- Every view scores 100% in Lighthouse (Desktop, Snapshot mode)

## Built by

Edina Kurdi
