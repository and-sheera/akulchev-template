import Swiper from 'swiper/bundle'
import { scrollTrigger } from '../../js'

export default function ourPartners() {
  const slider = new Swiper('.our-partners__slider', {
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 10,
    watchSlidesProgress: true,
    grid: {
      rows: 2
    },
    navigation: {
      nextEl: '.our-partners .ui-swiper-buttons .swiper-button-next',
      prevEl: '.our-partners .ui-swiper-buttons .swiper-button-prev'
    },
    breakpoints: {
      744: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1361: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  })
}
