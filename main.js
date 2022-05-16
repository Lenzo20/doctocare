addEventListener('scroll', onScroll) 

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activeMenuAtCurrentSection(home)
  // activeMenuAtCurrentSection(services)
}

function activeMenuAtCurrentSection(section) {

  // linha alvo
  const targetLine = scrollY + innerHeight / 2

  // verificar se a seção passou da linha

  // o topo da seção
  const sectionTop = section.offsetTop

  // a altura da seção
  const sectionHeight = section.offsetHeight

  // o top da seção chegou ou passou da linha alvo
  const sectionTopReachOrPassedTergetLine = targetLine >= sectionTop

  
  // verfiicar se a base está abaixo da linha alvo

  // onde a seção termina?
  const sectionEndsAt = sectionTop + sectionHeight

  // o final da senção passou da Linha alvo
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine


  // limites da seção
  const sectionBounderies = sectionTopReachOrPassedTergetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href *=${sectionId}]`)

  menuElement.classList.remove('active')
    if (sectionBounderies) {
      menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  const nvg = document.getElementById ('navigation')
  if (scrollY > 0) {
    nvg.classList.add ('scroll')
  } else {
    nvg.classList.remove ('scroll')
  }
}

function showBackToTopButtonOnScroll() {
    const Butg = document.getElementById ('backToTopButton')
    if (scrollY > 300) {
      Butg.classList.add ('show')
    } else {
      Butg.classList.remove ('show')
  }
}

function openMenu () {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove ('menu-expanded')
}


ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`
#home, 
#Hhome img, 
.stats, 
#services,
#services header,
#services .card,
#about,
#about header,
#about .content`);
