let menuBurguir = document.getElementById('burguir');
let menu = document.getElementById('menu')
let arrowMenuClose = document.getElementById('close-menu')


menuBurguir.addEventListener('click', (evento) => {
  evento.preventDefault();
  menuBurguir.classList.toggle('hidden');
  menu.classList.toggle('hidden')
  arrowMenuClose.classList.toggle('hidden')
}
)

arrowMenuClose.addEventListener('click', (event) => {
  event.preventDefault();
  arrowMenuClose.classList.toggle('hidden')
  menu.classList.toggle('hidden');
  menuBurguir.classList.toggle('hidden');
})


