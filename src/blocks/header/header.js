export default function header() {
  headerDimensions()
  window.addEventListener('load', headerDimensions)
  window.addEventListener('resize', headerDimensions)
  burger()
}

function headerDimensions() {
  const headerHeight = document.querySelector('.header').offsetHeight
  document.documentElement.style.setProperty('--header-height', `${headerHeight}px`)
}

function burger() {
  const header = document.querySelector('.header')
  const burgerButton = header.querySelector('.header__burger-button')
  if (burgerButton) {
    burgerButton.addEventListener('click', function (event) {
      header.classList.toggle('header--burger')
      document.body.style.overflow = header.classList.contains('header--burger') ? 'hidden' : ''
    })
  }

  const closeBurgerButton = header.querySelector('.header__burger-close')
  if (closeBurgerButton) {
    closeBurgerButton.addEventListener('click', function () {
      header.classList.remove('header--burger')
      document.body.style.overflow = ''
    })
  }

  window.addEventListener('click', function (event) {
    if (!event.target.closest('.header')) {
      header.classList.remove('header--burger')
      document.body.style.overflow = ''
    }
  })

  for (const item of header.querySelectorAll('.header__item')) {
    item.addEventListener('click', function (event) {
      if (window.innerWidth <= 1360 && event.target.closest('.header__link') && item.querySelector('.header__submenu')) {
        event.preventDefault()
        const previousActive = header.querySelector('.header__item.active')
        if (previousActive) previousActive.classList.remove('active')
        this.classList.add('active')
      }
    })
  }

  for (const backButton of header.querySelectorAll('.header__nav-back')) {
    backButton.addEventListener('click', function () {
      const currentItem = backButton.closest('.header__item')
      if (currentItem) currentItem.classList.remove('active')
    })
  }

  for (const closeNavButton of header.querySelectorAll('.header__nav-close')) {
    closeNavButton.addEventListener('click', function () {
      const currentItem = closeNavButton.closest('.header__item')
      if (currentItem) currentItem.classList.remove('active')
      header.classList.remove('header--burger')
      document.body.style.overflow = ''
    })
  }
}
