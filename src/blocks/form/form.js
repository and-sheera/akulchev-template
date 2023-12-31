/* eslint-disable unicorn/prevent-abbreviations */
import $ from 'jquery'
import 'parsleyjs'

export default function form() {
  for (const form of document.querySelectorAll('.form')) {
    form.addEventListener('submit', (event) => event.preventDefault())
    $(form).parsley().on('form:success', function () {
      const activePopup = document.querySelector('.popup.active')
      if (activePopup) window.closePopup(activePopup.id)

      const thxPopup = form.dataset.thxPopup
      if (thxPopup) window.openPopup(thxPopup)
    })

    const formDocsBlock = form.querySelector('.form__docs')
    if (formDocsBlock) {
      const document = formDocsBlock.querySelector('.form__doc')
      const documentName = formDocsBlock.querySelector('.form__doc-name')
      const documentDelButton = formDocsBlock.querySelector('.form__doc-del')
      const attachment = form.querySelector('.form__attachment')
      const popupButton = formDocsBlock.querySelector('[data-file-attach]')
      const deleteAcceptButton = form.querySelector('.form__file-del-accept .ui-button')

      if (attachment) {
        const attachmentButton = attachment.querySelector('.ui-button')
        const attachmentInput = attachment.querySelector('.ui-input input')
        attachmentButton.addEventListener('click', function () {
          if (attachmentInput.value) {
            window.closePopup(attachment.closest('.popup').id)
            popupButton.style.display = 'none'
            if (document && attachmentInput.files.length > 0) {
              document.style.display = ''
              documentName.textContent = attachmentInput.files[0].name
            }
          } else {
            attachmentInput.click()
          }
        })

        documentDelButton.addEventListener('click', function () {
          window.openPopup('file-del-accept')
        })

        deleteAcceptButton.addEventListener('click', function () {
          attachmentInput.value = ''
          attachmentInput.dispatchEvent(new Event('change'))
          popupButton.style.display = ''
          document.style.display = 'none'
          documentName.textContent = ''
          window.closePopup('file-del-accept')
        })

        attachmentInput.addEventListener('change', function () {
          attachmentButton.textContent = this.value ? attachmentButton.dataset.textActive : attachmentButton.dataset.textStart
        })
      }
    }
  }
}
