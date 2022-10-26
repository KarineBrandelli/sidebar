const menu = document.querySelector('.menu-bars');
const vetLogo = document.querySelector('#logo-vet');
const vetImage = document.querySelector('footer div');
const hidden = document.querySelectorAll('ul li span');
const input = document.querySelector('input');
const navbar = document.querySelector('nav');

document.addEventListener('click', (event) => {
  event.preventDefault();
});

menu.addEventListener('click', (event) => {
  showMenu();
});

function showMenu() { 
  const spanItems = [...hidden];
  console.log(spanItems)

  spanItems.map(item => item.classList.toggle('hidden'));
  vetImage.classList.toggle('hidden');
  vetLogo.classList.toggle('hidden');
  input.classList.toggle('hidden');
  navbar.classList.toggle('sizing');
};

