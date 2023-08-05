export default function breadcrumbs() {
  const element = document.querySelector('.breadcrumbs')
  if (element) {
    const list = element.querySelector('.breadcrumbs__list')
    const items = list.children
    if (list.scrollWidth > list.offsetWidth && items.length > 2) {
      for (let index = 0; index < items.length - 1; index++) {
        const item = items[index]
        if (index === 0) {
          const centerItem = document.createElement('li')
          centerItem.className = 'breadcrumbs__item'
          const dotsButton = document.createElement('button')
          dotsButton.className = 'breadcrumbs__button'
          dotsButton.textContent = '...'
          dotsButton.addEventListener('click', function () {
            for (let jndex = 0; jndex < items.length - 1; jndex++) {
              items[jndex].style.display = ''
            }
            centerItem.remove()
          })
          centerItem.append(dotsButton)
          item.after(centerItem)
        } else if (index !== 1) {
          item.style.display = 'none'
        }
      }
    }
  }
}
