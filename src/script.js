/*const menu = document.getElementById('menu');
const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');

function openMenu() {
  menu.classList.remove('translate-x-[100%]')
  openBtn.classList.add('hidden')
  closeBtn.classList.remove('hidden')
};

function closeMenu() {
  menu.classList.add('translate-x-[100%]')
  openBtn.classList.remove('hidden')
  closeBtn.classList.add('hidden')
};

openBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
menu.addEventListener('click', closeMenu);

*/
const menu = document.getElementById('menu');
const openBtn = document.querySelector('.open')
const closeBtn = document.querySelector('.close')

function handleBtn() {
  menu.classList.toggle('translate-x-[100%]');
  openBtn.classList.toggle('hidden');
  closeBtn.classList.toggle('hidden');
};

function openMenu() {
  handleBtn()
};

function closeMenu() {
  handleBtn()
}

openBtn.addEventListener('click', handleBtn);
closeBtn.addEventListener('click', handleBtn)
menu.addEventListener('click', handleBtn);




