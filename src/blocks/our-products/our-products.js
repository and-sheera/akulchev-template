import Swiper from 'swiper/bundle'

export default function ourProducts() {
  const slider = new Swiper('.our-products__slider', {
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 110,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
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
}
