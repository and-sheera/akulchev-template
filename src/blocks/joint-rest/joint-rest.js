import Swiper from 'swiper/bundle'

export default function jointRest() {
  const slider = new Swiper('.joint-rest__slider', {
    speed: 400,
    slidesPerView: 'auto',
    spaceBetween: 10,
    watchSlidesProgress: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    breakpoints: {
      744: {
        spaceBetween: 20
      }
    }
  })
}
