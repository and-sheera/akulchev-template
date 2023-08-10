import Swiper from 'swiper/bundle'
import { scrollTrigger } from '../../js'

export default function jointRest() {
  if (document.querySelector('.joint-rest')) {
    const slider = new Swiper('.joint-rest__slider', {
      speed: 400,
      slidesPerView: 'auto',
      spaceBetween: 10,
      watchSlidesProgress: true,
      breakpoints: {
        744: {
          spaceBetween: 20
        }
      }
    })

    window.addEventListener('load', () => {
      scrollTrigger('.joint-rest__item', {
        stagger: 50
      })
    })
  }
}
