import Swiper from 'swiper/bundle'

export default function newsSlider() {
  const newsSwiper = new Swiper('.news-slider', {
    speed: 400,
    slidesPerView: 1.04,
    spaceBetween: 10,
    watchSlidesProgress: true,
    pagination: {
      el: '.news-slider .ui-swiper-bullets .swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      744: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      1361: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    }
  })
}
