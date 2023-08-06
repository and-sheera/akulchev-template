import Swiper from 'swiper/bundle'

export default function productsInnerSlider() {
  const block = document.querySelector('.product-inner-slider')
  if (block) {
    const slider = new Swiper(block.querySelector('.product-inner-slider__container:not(.swiper-initialized)'), {
      speed: 400,
      slidesPerView: 1,
      spaceBetween: 0,
      navigation: {
        nextEl: block.querySelector('.ui-swiper-buttons .swiper-button-next'),
        prevEl: block.querySelector('.ui-swiper-buttons .swiper-button-prev')
      },
      pagination: {
        el: block.querySelector('.ui-swiper-bullets .swiper-pagination'),
        type: 'bullets',
        clickable: true
      }
    })
  }
}
