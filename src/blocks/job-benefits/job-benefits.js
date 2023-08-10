import Swiper from 'swiper/bundle'
import { scrollTrigger } from '../../js'

export default function jobBenefits() {
  if (document.querySelector('.job-benefits')) {
    const slider = new Swiper('.job-benefits__slider', {
      speed: 400,
      slidesPerView: 'auto',
      spaceBetween: 12,
      watchSlidesProgress: true,
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

    window.addEventListener('load', () => {
      scrollTrigger('.job-benefits__item', {
        stagger: 50
      })
    })
  }
}
