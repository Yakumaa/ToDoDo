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

// Function to handle toggling the sidebar state
// function toggleSidebarState() {
//   sidebarContainer.classList.toggle("close");
//   sidebar.classList.toggle("close");
//   toggle.classList.toggle("rotate");
//   project.classList.toggle("close");
// }

// // Function to set the initial sidebar state based on the query parameter
// function setInitialSidebarState() {
//   const urlParams = new URLSearchParams(window.location.search);
//   const isSidebarCollapsed = urlParams.get("sidebarCollapsed");

//   if (isSidebarCollapsed === "true") {
//     toggleSidebarState();
//   }
// }

// // Add click event listener to the toggle button
// toggle.addEventListener("click", () => {
//   toggleSidebarState();
//   const currentState = sidebarContainer.classList.contains("close");

//   // Update the URL with the new sidebar state
//   const newUrl = updateUrlParameter(window.location.href, "sidebarCollapsed", currentState);
//   window.history.replaceState({}, document.title, newUrl);
// });

// // Set initial sidebar state when the page loads
// setInitialSidebarState();

// // Helper function to update URL query parameter
// function updateUrlParameter(url, key, value) {
//   const urlObject = new URL(url);
//   urlObject.searchParams.set(key, value);
//   return urlObject.toString();
// }

// // Handle page navigation events
// window.addEventListener("DOMContentLoaded", () => {
//   const links = document.querySelectorAll(".sidebar a");
//   links.forEach(link => {
//     link.addEventListener("click", event => {
//       event.preventDefault(); // Prevent default navigation behavior
//       const newUrl = updateUrlParameter(link.getAttribute("href"), "sidebarCollapsed", sidebarContainer.classList.contains("close"));
//       window.history.pushState({}, document.title, newUrl);
//       setInitialSidebarState(); // Update sidebar state for the new page
//       window.location.href = newUrl;
//     });
//   });
// });
