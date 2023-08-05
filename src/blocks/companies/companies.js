import Swiper from 'swiper/bundle'

export default function companies() {
  const companiesSlider = new Swiper('.companies', {
    speed: 400,
    slidesPerView: 1.8,
    spaceBetween: 20,
    watchSlidesProgress: true,
    pagination: {
      el: '.companies .ui-swiper-bullets .swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      744: {
        slidesPerView: 4
      },
      1361: {
        slidesPerView: 6
      }
    }
  })
}
