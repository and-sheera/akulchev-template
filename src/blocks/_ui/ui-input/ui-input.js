import IMask from 'imask'

export default function uiInput() {
  for (const input of document.querySelectorAll('[data-mask=phone]')) {
    IMask(input, {
      mask: '+{7} (000) 000-00-00'
    })
  }

  for (const fileInput of document.querySelectorAll('.ui-input--file input[type=file]')) {
    fileInput.addEventListener('change', function () {
      const fileName = this.parentElement.querySelector('.ui-input__file-name')
      if (this.files.length > 0) {
        fileInput.classList.add('filled')
        if (fileName) fileName.textContent = this.files[0].name
      } else {
        fileInput.classList.remove('filled')
        if (fileName) fileName.textContent = ''
      }
    })
  }
}
