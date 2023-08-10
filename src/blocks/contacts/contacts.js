import Swiper from 'swiper/bundle'

export default function contacts() {
  const element = document.querySelector('.contacts')
  if (element) {
    const slider = new Swiper('.contacts__body', {
      speed: 400,
      slidesPerView: 1,
      spaceBetween: 10,
      noSwipingClass: 'contacts__map',
      pagination: {
        el: '.contacts .ui-swiper-bullets .swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    })

    const tabs = element.querySelector('.contacts__tabs')
    if (tabs) {
      const head = tabs.querySelector('.contacts__tabs-head')
      const items = tabs.querySelectorAll('.contacts__tab')
      head.textContent = tabs.querySelector('.contacts__tab.active').textContent || items[0].textContent
      for (const [index, item] of items.entries()) {
        item.addEventListener('click', function () {
          for (const item_ of items) item_.classList.remove('active')
          item.classList.add('active')
          slider.slideTo(index)
          head.textContent = item.textContent
          tabs.classList.remove('open')
        })
      }
      slider.on('slideChange', function () {
        for (const item of items) item.classList.remove('active')
        items[slider.activeIndex]?.classList.add('active')
        head.textContent = items[slider.activeIndex]?.textContent
      })

      head.addEventListener('click', function () {
        tabs.classList.add('open')
      })

      document.addEventListener('click', (event) => {
        if (!event.target.closest('.contacts__tabs')) {
          tabs.classList.remove('open')
        }
      })
    }
  }
}
