import Swiper from 'swiper/bundle'

export default function product() {
  const thumbsSlider = new Swiper('.product__thumbs', {
    spaceBetween: 5,
    slidesPerView: 6,
    navigation: {
      nextEl: '.product__thumbs .product__btn--next',
      prevEl: '.product__thumbs .product__btn--prev'
    },
    breakpoints: {
      1361: {
        spaceBetween: 10
      }
    }
  })
  const mainSlider = new Swiper('.product__slider', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.product__slider .product__btn--next',
      prevEl: '.product__slider .product__btn--prev'
    },
    thumbs: {
      swiper: thumbsSlider
    }
  })
}
