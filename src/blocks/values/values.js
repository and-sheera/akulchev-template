import { scrollTrigger } from '../../js'

export default function values() {
  window.addEventListener('load', () => {
    const container = document.querySelector('.values')
    if (container) {
      const content = container.querySelector('.values__container')
      container.style.height = ''
      content.style.minWidth = ''

      const offset = 0
      let contentWidth = 0
      const stepItems = content.querySelectorAll('.values__item')
      for (const stepItem of stepItems) {
        contentWidth += stepItem.offsetWidth
      }
      contentWidth += Number.parseFloat(window.getComputedStyle(content).gap) * (stepItems.length - 1)
      contentWidth += Number.parseFloat(window.getComputedStyle(content).paddingLeft) + Number.parseFloat(window.getComputedStyle(content).paddingRight)

      const scrollWidth = contentWidth - content.offsetWidth

      content.style.minWidth = `${contentWidth}px`
      container.style.height = `${container.offsetHeight + scrollWidth + offset}px`

      const handleScroll = () => {
        if (container.getBoundingClientRect().top < 0 && container.getBoundingClientRect().bottom > window.innerHeight) {
          let translate = Math.abs(container.getBoundingClientRect().top) - offset
          if (translate > scrollWidth) translate = scrollWidth
          if (translate < 0) translate = 0
          content.style.transform = `translateX(-${translate}px)`
        }
        if (container.getBoundingClientRect().top > offset) {
          content.style.transform = 'translateX(0)'
        }
        if (container.getBoundingClientRect().bottom < window.innerHeight) {
          content.style.transform = `translateX(-${scrollWidth}px)`
        }
      }
      window.addEventListener('scroll', handleScroll)

      scrollTrigger('.values__item', {
        stagger: 200,
        cb: () => {}
      })
      scrollTrigger('.values__pin', {
        threshold: 0.4
      })
    }
  })
}
