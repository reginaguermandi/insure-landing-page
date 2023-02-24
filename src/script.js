const menu = document.getElementById('menu');
const openMenu = document.getElementById('open');
const closeMenu = document.getElementById('close');

openMenu.onclick = () => {
  menu.classList.remove('hidden')
  openMenu.classList.add('hidden')
  closeMenu.classList.remove('hidden');
};

closeMenu.onclick = () => {
  menu.classList.add('hidden')
  openMenu.classList.remove('hidden')
  closeMenu.classList.add('hidden');
};
