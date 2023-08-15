import Swiper from 'swiper/bundle'

export default function ourAwards() {
  if (document.querySelector('.our-awards')) {
    const slider = new Swiper('.our-awards__slider', {
      speed: 400,
      slidesPerView: 'auto',
      spaceBetween: 12,
      watchSlidesProgress: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.our-awards .ui-swiper-bullets .swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        744: {
          spaceBetween: 12
        },
        1361: {
          spaceBetween: 20
        }
      }
    })
  }
}
