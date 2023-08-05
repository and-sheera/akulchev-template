import Swiper from 'swiper/bundle'

export default function benefits() {
  const benefitsSlider = new Swiper('.benefits', {
    speed: 400,
    slidesPerView: 'auto',
    spaceBetween: 10,
    enabled: true,
    watchSlidesProgress: true,
    pagination: {
      el: '.benefits .ui-swiper-bullets .swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      744: {
        spaceBetween: 0,
        enabled: false
      }
    }
  })
}
