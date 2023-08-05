import IMask from 'imask'

export default function uiInput() {
  for (const input of document.querySelectorAll('[data-mask=phone]')) {
    IMask(input, {
      mask: '+{7} (000) 000-00-00'
    })
  }
}
