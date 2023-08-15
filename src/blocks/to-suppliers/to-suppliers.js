import Swiper from 'swiper/bundle'

export default function toSuppliers() {
  if (document.querySelector('.to-suppliers')) {
    const slider = new Swiper('.to-suppliers__slider', {
      speed: 400,
      slidesPerView: 1,
      spaceBetween: 60,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.to-suppliers .ui-swiper-bullets .swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.to-suppliers .ui-swiper-buttons .swiper-button-next',
        prevEl: '.to-suppliers .ui-swiper-buttons .swiper-button-prev'
      }
    })
  }
}
