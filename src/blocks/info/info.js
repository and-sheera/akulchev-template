import Swiper from 'swiper/bundle'

export default function info() {
  for (const slider of document.querySelectorAll('.info__slider')) {
    const infoSlider = new Swiper(slider, {
      speed: 400,
      slidesPerView: 1,
      spaceBetween: 0,
      navigation: {
        nextEl: slider.querySelector('.ui-swiper-buttons .swiper-button-next'),
        prevEl: slider.querySelector('.ui-swiper-buttons .swiper-button-prev')
      }
    })
  }
}
