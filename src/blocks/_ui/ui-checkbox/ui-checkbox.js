export default function uiCheckbox() {
  document.addEventListener('click', (event) => {
    const button = event.target.closest('.ui-checkbox__button')
    if (button) {
      button.closest('.ui-checkbox').classList.toggle('active')
    }
  })
}
