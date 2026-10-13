// This is a placeholder
// window.onload = function () {
//   const users = getUserIds();
//   document.querySelector("body").innerText = `There are ${users.length} users`;
// };
// //placeholder finishes
// // todo - check if this needs to be deleted, otherwise merge the imports

//====================================================
// IMPORTS
//====================================================
import { getUserIds, getToday, calculateRevisionDates } from "./common.mjs";
import { getData, addData } from "./storage.mjs";

// ========================================
// DOM ELEMENTS
// ========================================
const userSelection = document.getElementById("user-select");
const topicInputElement = document.getElementById("topic-input");
const dateInputElement = document.getElementById("date-input");
const revisionListElement = document.getElementById("revision-list");
const revisionTemplate = document.getElementById("revision-template");

//====================================================
// STATE
//====================================================

let state = {
  selectedUserId: "",
  agenda: [],
  topicInput: "",
  dateInput: getToday(), //today's local date
  error: "",
};

function setState(updates) {
  state = { ...state, ...updates };
  render();
}

//-----------------------------------------
// VALIDATION
//-----------------------------------------

function validateTopicForm() {
  const errors = [];

  // Check whether a user is selected
  if (!state.selectedUserId) {
    errors.push("Please select a user.");
  }

  // Check whether a topic is entered
  if (!state.topicInput.trim()) {
    errors.push("Please enter a topic.");
  }

  // Check whether a date is selected
  if (!state.dateInput) {
    errors.push("Please select a date.");
  }

  return errors;
}

// ========================================
// ACTIONS
// ========================================

// selectUser()
function selectUser(userId) {
  const agenda = getData(userId) || [];

  setState({
    selectedUserId: userId,
    agenda,
    topicInput: "",
    dateInput: getToday(),
    error: "",
  });
}

//updateTopic(newTopic)
function updateTopic(newTopic) {
  setState({ topicInput: newTopic });
}

// updateDate(newDate)

function updateDate(newDate) {
  // Receives the new date as a string, e.g. "2026-11-15"

  setState({ dateInput: newDate });
}

// addTopic()
function addTopic() {
  // Validate the form
  const errors = validateTopicForm();
  if (errors.length > 0) {
    setState({ error: errors.join(" ") });
    return;
  }

  // Calculate revision dates
  const revisionDates = calculateRevisionDates(state.dateInput); //array of date strings

  // Save the new agenda entries
  const agendaEntries = revisionDates.map((date) => {
    return {
      topic: state.topicInput,
      date,
    };
  });

  addData(state.selectedUserId, agendaEntries);

  // Update state and reset the form

  const agenda = getData(state.selectedUserId) || [];
  setState({
    agenda,
    topicInput: "",
    dateInput: getToday(),
    error: "",
  });
}
// ========================================
// RENDERING
// ========================================
function populateUserSelect() {
  // // 1. Find the <select> element
  // const userSelection = document.getElementById("user-select");
  // 2. Get the five user IDs
  const userIds = getUserIds();

  // 3. Create an <option> for each user
  userIds.forEach((id) => {
    const option = document.createElement("option");
    option.value = id;
    option.textContent = `User ${id}`;
    userSelection.append(option);
  });
}

function render() {
  //display validation error if any
  const formError = document.getElementById("form-error");
  formError.textContent = state.error; //todo what if this is an array?

  //sync user dropdown
  userSelection.value = state.selectedUserId;

  topicInputElement.value = state.topicInput;
  dateInputElement.value = state.dateInput;

  renderAgenda();
}

function renderAgenda() {
  revisionListElement.innerHTML = "";

  // Get todays date
  const today = getToday();

  // Filter out past revisions
  const futureRevisions = state.agenda.filter((entry) => {
    return entry.date >= today;
  });
  // Sort future revisions from earliest to latest
  futureRevisions.sort((a, b) => a.date.localeCompare(b.date));

  // Display a message if there are no upcoming revisions
  if (futureRevisions.length === 0) {
    const message = document.createElement("li");

    message.textContent = state.selectedUserId
      ? "No upcoming revisions."
      : "Select a user to view your revision agenda.";

    revisionListElement.append(message);
    return;
  }

  futureRevisions.forEach((entry) => {
    // Clone the template
    const clone = revisionTemplate.content.cloneNode(true);

    // Fill in the topic
    const topicElement = clone.querySelector("[data-topic]");
    topicElement.textContent = entry.topic;
    // Fill in the date
    const dateElement = clone.querySelector("[data-date]");
    dateElement.textContent = entry.date;
    dateElement.setAttribute("datetime", entry.date);

    // Append the completed entry to the list
    revisionListElement.append(clone);
  });
}

// ========================================
// INITIALISATION
// ========================================

populateUserSelect();
render();
