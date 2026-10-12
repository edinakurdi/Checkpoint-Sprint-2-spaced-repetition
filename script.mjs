// This is a placeholder
import { getUserIds } from "./common.mjs";

window.onload = function () {
  const users = getUserIds();
  document.querySelector("body").innerText = `There are ${users.length} users`;
};

//====================================================
// STATE
//====================================================

let state = {
  selectedUserId: "",
  agenda: [],
  topicInput: "",
  dateInput: "",
  error: "",
};

function setState(updates) {
  state = { ...state, ...updates };
  render();
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
  // TODO: Validate the form
  // TODO: Calculate revision dates
  // TODO: Save the new agenda entries
  // TODO: Update state and reset the form
}
