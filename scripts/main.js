const sidebar = document.getElementById("sidebar");

function toggleSidebar() {
  sidebar.classList.toggle("open");
}

window.addEventListener("click", (event) => {
  if (
    sidebar.classList.contains("open") &&
    !event.target.closest(".sidebar") &&
    !event.target.closest(".open-btn")
  ) {
    sidebar.classList.remove("open");
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && sidebar.classList.contains("open")) {
    sidebar.classList.remove("open");
  }
});
