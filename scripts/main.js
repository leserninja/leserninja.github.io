function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("open");
}

function showTab(tabId) {
  const tabs = document.querySelectorAll(".tab-content");
  tabs.forEach((tab) => {
    tab.style.display = "none"; // Hide all tabs
  });
  document.getElementById(tabId).style.display = "block"; // Show the selected tab
}
