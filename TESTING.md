## Testing

This document details the tests I have completed based on the rubric criteria.

## The website must contain a drop-down which lists exactly 5 users

_Manual test_: Opened the website and confirmed that the drop-down contains 5 users

## No user is selected on page load

_Manual test_: Opened the website in incognito mode, and no user was selected to start with. Refreshed the page after adding topics, and confirmed that no user was selected.

## All of the users must have no agenda when first loading (i.e. with clear `localStorage`). Data should be persisted across page loads (which is handled by the code in `storage.mjs`).

_Manual test_: Opened the page in an incognito window, and selected each user, none had any agenda to start with. After adding topics, I switched between users, and confirmed that their previously created topics persisted.

## Selecting a user must load the relevant user's agenda from storage

_Manual test_: Added topics to users' agendas, switched between users and confirmed that their previously created topics were loaded.

## Selecting a user must display the agenda for the relevant user (see manual testing below)

_Manual test_: Added different topics for Users 1 and 2, switched between them and confirmed that each user's saved topics were displayed.

## If there is no agenda for the selected user, a message is displayed to explain this

_Manual test_: Selected a user with no revision topics entered and confirmed that "No upcoming revisions." showed under the agenda.

## The website must contain a form with inputs for a topic name and a date picker. The form should also have a submit button.

_Manual test_: Checked that all three elements were showing and could be used.

## The date picker must default to today’s date on first page load

_Manual test_: Opened the page multiple times on different days and in different browsers. The default date was always the current day.

## The form has validation to ensure that both the topic name and and selected date have been set by the user

_Manual test_:
The form uses novalidate so validation is handled in JS: It checks if a user is selected, a topic is entered, and if the date is set and displays an error message for any that are missing. Tried submitting with each of these missing and confirmed the correct error message appeared and nothing was saved.

## Submitting the form adds a new topic to revise for the relevant user only. The topic’s dates to revise are calculated as one week, one month, three months, six months and one year from the selected date (see manual testing below)

_Manual test_ : Added different topics for different users and confirmed that the topics remained associated with the users they were entered for.
Checked that revision dates were calculated for one week, one month, three months, six months and one year later.

_Unit test_: Tested the calculations in common.test.mjs

## After creating a new topic to revise, the agenda for the current user is shown, including the new topic

_Manual test_: Added a new topic and confirmed that its upcoming revision dates appeared in the selected user's agenda.

## The website must score 100% for accessibility in Lighthouse in the Desktop device mode, for all views in the website

_Manual test_: Ran Lighthouse accessibility audits in Desktop Snapshot mode for the initial page, populated agenda, empty agenda and validation error states. All scored 100% (22/22 checks passed).

## Unit tests must be written for at least one non-trivial function

_Unit test_: Tested calculateRevisionDates() in common.test.mjs, including a normal date, an end-of-month date, and a leap year and daylight saving time changes.

## The project must not contain any dead code. All written JavaScript and CSS must be used.

_Manual test_: Reviewed JS and HTML for unused code. Removed scaffolding placeholders, commented-out code and outdated TODOs and the unused "clearData()" helper from storage.mjs. All other codes are used.
