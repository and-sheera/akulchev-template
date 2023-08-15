/* eslint-disable unicorn/prefer-dom-node-dataset */
import Swiper from 'swiper/bundle'

export default function productsPackaging() {
  if (document.querySelector('.products-packaging')) {
    const head = document.querySelector('.products-packaging:not(.swiper-initialized)')
    if (head) {
      const slider = new Swiper(head, {
        speed: 400,
        slidesPerView: 'auto',
        allowSlidePrev: true,
        allowSlideNext: true,
        spaceBetween: 10,
        centeredSlides: !head.hasAttribute('data-center-insufficient'),
        centerInsufficientSlides: head.hasAttribute('data-center-insufficient'),
        slideToClickedSlide: true,
        navigation: {
          nextEl: '.products-packaging .ui-swiper-buttons .swiper-button-next',
          prevEl: '.products-packaging .ui-swiper-buttons .swiper-button-prev'
        },
        breakpoints: {
          744: {
            spaceBetween: 22
          },
          1361: {
            spaceBetween: 27
          }
        }
      })

      const innerSlider = document.querySelector('.product-inner-slider__container')
      if (innerSlider) {
        innerSlider.swiper.on('slideChange', () => {
          slider.slideTo(innerSlider.swiper.activeIndex)
        })
        slider.on('slideChange', () => {
          innerSlider.swiper.slideTo(slider.activeIndex)
        })
        setInterval(() => {
          if (innerSlider.swiper.isEnd) {
            innerSlider.swiper.slideTo(0)
          } else {
            innerSlider.swiper.slideNext()
          }
        }, 5000)
      }
    }
  }
}
