import Swiper from 'swiper/bundle'

export default function productsNav() {
  const nav = document.querySelector('.products-nav')
  if (nav) {
    const slider = new Swiper('.products-nav', {
      speed: 400,
      slidesPerView: 'auto',
      spaceBetween: 0,
      centerInsufficientSlides: true
    })
    const active = nav.querySelector('.active')
    if (active) slider.slideTo([...active.parentNode.children].indexOf(active))
  }
}
