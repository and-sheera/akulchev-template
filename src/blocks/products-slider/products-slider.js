import Swiper from 'swiper/bundle'

export default function productsSlider() {
  if (document.querySelector('.products-slider')) {
    const slider = new Swiper('.products-slider__slider', {
      speed: 400,
      slidesPerView: 'auto',
      spaceBetween: 6,
      watchSlidesProgress: true,
      pagination: {
        el: '.products-slider .ui-swiper-bullets .swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.products-slider .ui-swiper-buttons .swiper-button-next',
        prevEl: '.products-slider .ui-swiper-buttons .swiper-button-prev'
      },
      breakpoints: {
        744: {
          spaceBetween: 20
        },
        1361: {
          spaceBetween: 40
        }
      }
    })
  }
}
