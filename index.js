
const menuButton = document.getElementById('open-menu')
const closeButton = document.getElementById('close-menu')
const menu = document.getElementById('menu')
const aside = document.getElementsByTagName('aside')[0]
const section = document.getElementsByTagName('section')[0]
const footer = document.getElementsByTagName('footer')[0]

menuButton.addEventListener('click' ,()=> {
  menu.classList.remove('hidden')
  menu.classList.remove('menu-off')
  menu.classList.add('menu-in')
  menu.classList.add('nav-open')
  closeButton.classList.remove('hidden')
  aside.classList.add('hidden')
  section.classList.add('hidden')
  footer.classList.add('hidden')

})

closeButton.addEventListener('click', () => {
  menu.classList.add('menu-off')
  menu.classList.remove('menu-in')
  setTimeout(()=>{
    menu.classList.remove('nav-open')
    menu.classList.add('hidden') 
    menuButton.classList.remove('hidden')
    closeButton.classList.add('hidden')
    aside.classList.remove('hidden')
    section.classList.remove('hidden')
    footer.classList.remove('hidden')
  },295)
})