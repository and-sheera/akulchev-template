import Swiper from 'swiper/bundle'

export default function history() {
  const yearsSlider = new Swiper('.history__years', {
    speed: 400,
    slidesPerView: 'auto',
    spaceBetween: 10,
    watchSlidesProgress: true,
    slideToClickedSlide: true,
    enabled: true,
    virtualTranslate: false,
    breakpoints: {
      1361: {
        spaceBetween: 0,
        enabled: false,
        virtualTranslate: true
      }
    }
  })

  const mainSlider = new Swiper('.history__slider', {
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 80,
    watchSlidesProgress: true,
    autoplay: {
      delay: 5000
    },
    pagination: {
      el: '.history .ui-swiper-bullets .swiper-pagination',
      type: 'bullets',
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 15
    },
    navigation: {
      nextEl: '.history .ui-swiper-buttons .swiper-button-next',
      prevEl: '.history .ui-swiper-buttons .swiper-button-prev'
    }
  })

  const years = document.querySelectorAll('.history__year')
  for (const [index, year] of years.entries()) {
    year.addEventListener('click', function () {
      mainSlider.slideTo(index)
      for (const year_ of years) year_.classList.remove('active')
      this.classList.add('active')
    })
  }

  mainSlider.on('slideChange', () => {
    for (const year_ of years) year_.classList.remove('active')
    years[mainSlider.activeIndex].classList.add('active')
    yearsSlider.slideTo(mainSlider.activeIndex)
  })
}
