const openMenu = document.getElementById('#open');
const closeMenu = document.getElementById('#close');
const mobileMenu = document.getElementById('#mobileMenu');

openMenu.addEventListener('click', function (){
    mobileMenu.classList.toggle('hidden')
});