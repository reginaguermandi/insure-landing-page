const menu = document.getElementById('menu');
const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');

function openMenu() {
  menu.classList.remove('hidden')
  openBtn.classList.add('hidden')
  closeBtn.classList.remove('hidden')
};

function closeMenu() {
  menu.classList.add('hidden')
  openBtn.classList.remove('hidden')
  closeBtn.classList.add('hidden')
};

openBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
menu.addEventListener('click', closeMenu);

