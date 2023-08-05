import '../styles/style.scss'
import 'virtual:svg-icons-register'
import 'lazysizes'
import uiInput from '../blocks/_ui/ui-input/ui-input'
import uiSelect from '../blocks/_ui/ui-select/ui-select'
import tabs from '../blocks/tabs/tabs'
import header from '../blocks/header/header'
import banner from '../blocks/banner/banner'
import companies from '../blocks/companies/companies'
import products from '../blocks/products/products'
import form from '../blocks/form/form'
import benefits from '../blocks/benefits/benefits'
import newsSlider from '../blocks/news-slider/news-slider'
import popup from '../blocks/popup/popup'
import uiCheckbox from '../blocks/_ui/ui-checkbox/ui-checkbox'
import product from '../blocks/product/product'
import info from '../blocks/info/info'
import map from '../blocks/map/map'
import newsInner from '../blocks/news-inner/news-inner'
import breadcrumbs from '../blocks/breadcrumbs/breadcrumbs'
import productsSlider from '../blocks/products-slider/products-slider'
import values from '../blocks/values/values'

document.addEventListener('DOMContentLoaded', function () {
  // breadcrumbs()
  header()
  uiInput()
  // uiSelect()
  // uiCheckbox()
  banner()
  productsSlider()
  values()
  // companies()
  // products()
  form()
  // benefits()
  // newsSlider()
  // popup()
  // product()
  // info()
  // map()
  // newsInner()
  // tabs()
})

window.addEventListener('load', () => {
  setTimeout(() => {
    document.body.classList.remove('transition-disabled')
  }, 300)
})
