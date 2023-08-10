import { scrollTrigger } from '../../js'

export default function geographyPresence() {
  const block = document.querySelector('.geography-presence')
  if (block) {
    const button = block.querySelector('[data-toggle]')
    const flipElement = block.querySelector('.geography-presence__flip')
    if (button && flipElement) {
      button.addEventListener('click', function () {
        flipElement.classList.toggle('active')
        this.textContent = flipElement.classList.contains('active') ? this.dataset.textActive : this.dataset.textStart
      })
    }

    scrollTrigger('.geography-presence', {
      threshold: 0.4
    })
  }
}
