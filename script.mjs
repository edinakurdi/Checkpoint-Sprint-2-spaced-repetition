// This is a placeholder
import { getUserIds } from "./common.mjs";

window.onload = function () {
  const users = getUserIds();
  document.querySelector("body").innerText = `There are ${users.length} users`;
};

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
