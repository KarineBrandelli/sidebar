const menu = document.querySelector('.menu-bars');
const vetLogo = document.querySelector('#logo-vet');
const vetImage = document.querySelector('footer div');
const hidden = document.querySelectorAll('ul li span');

console.log(vetImage);

menu.addEventListener('click', (event) => {
  event.preventDefault();
  showMenu();
});

function showMenu() { 
  const spanItems = [...hidden];
  console.log(spanItems)

  spanItems.map(item => item.classList.toggle('hidden'));
  vetImage.classList.toggle('hidden');
  vetLogo.classList.toggle('hidden');
}