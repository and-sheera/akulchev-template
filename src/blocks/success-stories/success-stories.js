import Swiper from 'swiper/bundle'
import $ from 'jquery'

export default function successStories() {
  const element = document.querySelector('.success-stories')
  if (element) {
    const spaceBetween = window.innerWidth > 1360 ? 20 : 10
    const slider = new Swiper(element.querySelector('.success-stories__slider'), {
      speed: 400,
      slidesPerView: 1,
      spaceBetween,
      slidesOffsetAfter: element.querySelector('.success-stories__item')?.offsetWidth + spaceBetween || 540,
      mousewheel: {
        noMousewheelClass: 'success-stories__story'
      },
      pagination: {
        el: '.success-stories .ui-swiper-bullets .swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        744: {
          slidesPerView: 'auto'
        }
      }
    })

    const items = element.querySelectorAll('.success-stories__item')
    for (const item of items) {
      item.addEventListener('mouseover', function () {
        if (window.innerWidth > 1360) {
          for (const item of items) item.classList.remove('active')
          this.classList.add('active')
        }
      })
      item.addEventListener('click', function () {
        if (window.innerWidth <= 1360) {
          for (const item_ of items) {
            if (item_ !== item) item_.classList.remove('active')
          }
          this.classList.toggle('active')
        }
        if (window.innerWidth <= 743) {
          const storyElement = item.querySelector('.success-stories__story')
          if (storyElement) {
            $(storyElement).slideToggle()
          }
        }
      })
    }

    element.openByIndex = function (index) {
      if (index >= 0 && index < items.length) {
        slider.slideTo(index)
        for (const item of items) item.classList.remove('active')
        items[index].classList.add('active')
      }
    }
  }
}
