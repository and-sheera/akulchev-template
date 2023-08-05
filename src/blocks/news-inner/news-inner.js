import Swiper from 'swiper/bundle'

export default function newsInner() {
  const companiesSlider = new Swiper('.news-inner__another', {
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 10,
    watchSlidesProgress: true,
    enabled: true,
    pagination: {
      el: '.companies .ui-swiper-bullets .swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      744: {
        slidesPerView: 2.3,
        enabled: true
      },
      1361: {
        slidesPerView: 'auto',
        spaceBetween: 0,
        enabled: false
      }
    }
  })
}
