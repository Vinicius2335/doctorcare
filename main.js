// Em vez de executar a função no body, executamos na janela inteira, para não dar erro caso a função seja chamado sem ter carregado o body
window.addEventListener('scroll', onScroll)
onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToUpButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  //linha alvo
  const targetLine = scrollY + innerHeight / 2

  //verificar se a seção passou da linha
  
  //topo da seção
  const sectionTop = section.offsetTop //pega inicio da seção home
  //altura da seção
  const sectionHeight = section.offsetHeight //pega a altura da seção home

  // o topo da seção chegou ou passou da linha alvo
  const sectionTopReachOrPassedTargetLine =targetLine >= sectionTop

  //informaçoes
  console.log('O topo da seção chegou ou passou da linha?', sectionTopReachOrPassedTargetLine)

  // verificar se a base está abaixo da linha alvo

  //a seção termina onde?
  const sectionEndsAt = sectionTop + sectionHeight

  //final da seção passou da linha alvo ?
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  //informaçoes
  console.log('O fundo da seção passou da linha?', sectionEndPassedTargetLine)

  //limites da seção
  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToUpButtonOnScroll() {
  if (scrollY > 400) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

// Acento `` permite quebrar a linha para organizar a string
ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  #home,
  #home img,
  #home .stats,
  #services,
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content,
  #about .content img,
  #contact,
  #contact header,
  #contact .content,
  #contact .content img`)
