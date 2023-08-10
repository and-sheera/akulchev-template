import '../styles/style.scss'
import 'virtual:svg-icons-register'
import 'lazysizes'
import header from '../blocks/header/header'
import productsSlider from '../blocks/products-slider/products-slider'
import banner from '../blocks/banner/banner'
import values from '../blocks/values/values'
import form from '../blocks/form/form'
import productsInnerSlider from '../blocks/product-inner-slider/product-inner-slider'
import productsNav from '../blocks/products-nav/products-nav'
import productsPackaging from '../blocks/products-packaging/products-packaging'
import ourAwards from '../blocks/our-awards/our-awards'
import ourProducts from '../blocks/our-products/our-products'
import map from '../blocks/map/map'
import geographyPresence from '../blocks/geography-presence/geography-presence'
import ourPartners from '../blocks/our-partners/our-partners'
import popup from '../blocks/popup/popup'
import uiInput from '../blocks/_ui/ui-input/ui-input'
import toSuppliers from '../blocks/to-suppliers/to-suppliers'
import video from '../blocks/video/video'
import jobBenefits from '../blocks/job-benefits/job-benefits'
import interviewStages from '../blocks/interview-stages/interview-stages'
import successStories from '../blocks/success-stories/success-stories'
import jointRest from '../blocks/joint-rest/joint-rest'
import history from '../blocks/history/history'

if (!window.init) {
  window.init = true
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.body.classList.remove('transition-disabled')
    })
  })
  document.addEventListener('DOMContentLoaded', function () {
    uiInput()
    header()
    banner()
    productsSlider()
    values()
    form()
    productsInnerSlider()
    productsNav()
    productsPackaging()
    ourAwards()
    ourProducts()
    map()
    geographyPresence()
    ourPartners()
    popup()
    toSuppliers()
    video()
    jobBenefits()
    interviewStages()
    successStories()
    jointRest()
    history()

    simpleScrollAnim()
  })
}

function simpleScrollAnim() {
  window.addEventListener('load', () => {
    const mainAbout = '.main-about'
    if (document.querySelector(mainAbout)) {
      scrollTrigger(mainAbout, {
        rootMargin: '-25%'
      })
    }

    const productsList = '.products-list__item'
    if (document.querySelector(productsList)) {
      scrollTrigger(productsList, {
        threshold: 0.4
      })
    }

    const quality = '.quality'
    if (document.querySelector(quality)) {
      scrollTrigger(quality, {
        rootMargin: '-25%'
      })
    }
  })
}

export function scrollTrigger(selector, options = {}) {
  let els = document.querySelectorAll(selector)
  els = [...els]
  if (options.stagger) {
    let delay = 0
    for (const element of els) {
      element.style.transitionDelay = delay + 'ms'
      delay += options.stagger
    }
  }
  for (const element of els) {
    addObserver(element, options)
  }
}

function addObserver(element, options) {
  if (!('IntersectionObserver' in window)) return
  const observer = new IntersectionObserver((entries, observer) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        if (options.cb) {
          options.cb(element)
        } else {
          entry.target.classList.add('scroll-anim')
        }
        observer.unobserve(entry.target)
      }
    }
  }, options)
  observer.observe(element)
}
