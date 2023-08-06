import Swiper from 'swiper/bundle'
import { scrollTrigger } from '../../js'

export default function ourProducts() {
  if (document.querySelector('.our-products')) {
    const slider = new Swiper('.our-products__slider', {
      speed: 400,
      slidesPerView: 1,
      spaceBetween: 110,
      pagination: {
        el: '.our-products .ui-swiper-bullets .swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.our-products .ui-swiper-buttons .swiper-button-next',
        prevEl: '.our-products .ui-swiper-buttons .swiper-button-prev'
      }
    })

    scrollTrigger('.our-products', {
      threshold: 0.3
    })
  }
}
