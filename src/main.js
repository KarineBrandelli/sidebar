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
  navbarAnimation();
});

function navbarAnimation() { 
  navbar.classList.toggle('sizing');

  const myTimeout = setTimeout(removeItens, 200);
};

function removeItens() {
  const spanItems = [...hidden];

  spanItems.map(item => item.classList.toggle('hidden'));
  vetImage.classList.toggle('hidden');
  vetLogo.classList.toggle('hidden');
  input.classList.toggle('hidden');
};

function myStopFunction() {
  clearTimeout(myTimeout);
};

