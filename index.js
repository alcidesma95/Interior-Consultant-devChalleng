
const menuButton = document.getElementById('open-menu')
const closeButton = document.getElementById('close-menu')

menuButton.addEventListener('click' ,()=> {
  const menu = document.getElementById('menu')
  menu.classList.remove('hidden')
  menu.classList.add('nav-open')
  closeButton.classList.remove('hidden')
})

closeButton