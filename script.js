const sidebar = document.getElementById('sidebar');
const toggleSidebar = document.getElementById('toggleSidebar');
const toggleTheme = document.getElementById('toggleTheme');
const body = document.body;

toggleSidebar.onclick = () => {
  sidebar.classList.toggle('hidden');
  document.getElementById('topbar').classList.toggle('hidden');
};

toggleTheme.onclick = () => {
  body.classList.toggle('light');
};
