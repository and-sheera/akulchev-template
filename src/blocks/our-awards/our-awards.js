import Swiper from 'swiper/bundle'
import { scrollTrigger } from '../../js'

export default function ourAwards() {
  if (document.querySelector('.our-awards')) {
    const slider = new Swiper('.our-awards__slider', {
      speed: 400,
      slidesPerView: 'auto',
      spaceBetween: 12,
      watchSlidesProgress: true,
      pagination: {
        el: '.our-awards .ui-swiper-bullets .swiper-pagination',
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

    window.addEventListener('load', () => {
      scrollTrigger('.our-awards__item', {
        stagger: 50
      })
    })
  }
}
