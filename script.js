const toggleSidebar = document.getElementById('toggleSidebar');
const toggleTheme = document.getElementById('toggleTheme');
const body = document.body;

const toggleSidebarBtn = document.getElementById('toggleSidebar');
const sidebar = document.getElementById('sidebar');

toggleSidebarBtn.addEventListener('click', () => {
  sidebar.classList.toggle('show');
});


const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  body.classList.add('light');
}

toggleSidebar.onclick = () => {
  sidebar.classList.toggle('hidden');
  document.getElementById('topbar').classList.toggle('hidden');
};

toggleTheme.onclick = () => {
  body.classList.toggle('light');
  const newTheme = body.classList.contains('light') ? 'light' : 'dark';
  localStorage.setItem('theme', newTheme);
};



