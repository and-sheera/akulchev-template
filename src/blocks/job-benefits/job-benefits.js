import Swiper from 'swiper/bundle'

export default function jobBenefits() {
  const slider = new Swiper('.job-benefits__slider', {
    speed: 400,
    slidesPerView: 'auto',
    spaceBetween: 12,
    watchSlidesProgress: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.job-benefits .ui-swiper-bullets .swiper-pagination',
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
