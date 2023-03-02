const menu = document.getElementById('menu');
const openBtn = document.querySelector('.open')
const closeBtn = document.querySelector('.close')

// 
function handleBtn() {
  menu.classList.toggle('translate-x-[100%]');
  openBtn.classList.toggle('hidden');
  closeBtn.classList.toggle('hidden');
  document.body.style.overflowY = document.body.style.overflowY === 'hidden' ? 'visible' : 'hidden';
};

openBtn.addEventListener('click', handleBtn);
closeBtn.addEventListener('click', handleBtn);
menu.addEventListener('click', handleBtn);
