// import View from "./View.js";

const sidebar = document.querySelector(".sidebar")
const sidebarContainer = document.querySelector(".sidebar-container")
const toggle = document.querySelector(".toggle")
const project = document.querySelector(".project")

toggle.addEventListener("click", () => {
  console.log('yoo')
  sidebarContainer.classList.toggle("close")
  sidebar.classList.toggle("close");
  toggle.classList.toggle("rotate");
  project.classList.toggle("close");
});
