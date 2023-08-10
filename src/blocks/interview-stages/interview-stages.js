import Swiper from 'swiper/bundle'

export default function interviewStages() {
  if (document.querySelector('.interview-stages')) {
    const slider = new Swiper('.interview-stages__slider', {
      speed: 400,
      slidesPerView: 1,
      spaceBetween: 100,
      pagination: {
        el: '.interview-stages .ui-swiper-bullets .swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.interview-stages .ui-swiper-buttons .swiper-button-next',
        prevEl: '.interview-stages .ui-swiper-buttons .swiper-button-prev'
      }
    })

    const successStories = document.querySelector('.success-stories')
    if (successStories) {
      for (const stageItem of document.querySelectorAll('.interview-stages__item')) {
        const itemDataIndex = stageItem.dataset.storyIndex
        if (itemDataIndex) {
          stageItem.addEventListener('mouseover', function () {
            if (window.innerWidth > 1360) {
              successStories.openByIndex(+itemDataIndex)
            }
          })
        }
      }
    }
  }
}
