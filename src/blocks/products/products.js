import Swiper from 'swiper/bundle'

export default function products() {
  const companiesSlider = new Swiper('.products--mob-slider', {
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 10,
    enabled: true,
    watchSlidesProgress: true,
    pagination: {
      el: '.products .ui-swiper-bullets .swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      744: {
        spaceBetween: 0,
        slidesPerView: 'auto',
        enabled: false
      }
    }
  })
}
