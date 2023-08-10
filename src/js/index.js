import '../styles/style.scss'
import 'virtual:svg-icons-register'
import 'lazysizes'
import { gsap, ScrollTrigger } from 'gsap/all'
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
import contacts from '../blocks/contacts/contacts'

if (!window.init) {
  window.init = true
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.body.classList.remove('transition-disabled')
      animation()
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
    contacts()
  })
}

function animation() {
  const fadeUpSetting = { y: '0', opacity: 1 }
  gsap.registerPlugin(ScrollTrigger)

  if (document.querySelector('.banner')) {
    gsap.to('.banner__content', fadeUpSetting)
    gsap.to('.banner__img img', fadeUpSetting)
  }

  if (document.querySelector('.products-slider')) {
    gsap.timeline({
      scrollTrigger: {
        trigger: '.products-slider',
        start: 'top 70%',
        end: 'center bottom',
        once: true
      }
    }).to('.products-slider__img', { opacity: 1, scale: 1, stagger: 0.1 })
  }

  if (document.querySelector('.main-about')) {
    gsap.timeline({
      scrollTrigger: {
        trigger: '.main-about',
        start: 'top 80%',
        end: 'center bottom',
        once: true
      }
    }).to('.main-about', fadeUpSetting)
  }

  if (document.querySelector('.values')) {
    const valuesTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.values',
        start: 'top 70%',
        end: 'center bottom',
        once: true
      }
    })
    valuesTl.to('.values__item', { ...fadeUpSetting, stagger: 0.2 })
    valuesTl.to('.values__index', { ...fadeUpSetting, stagger: 0.1, duration: 0.3 })
  }

  if (document.querySelector('.products-list')) {
    for (const productsListItem of document.querySelectorAll('.products-list__item')) {
      gsap.timeline({
        scrollTrigger: {
          trigger: productsListItem,
          start: 'top 80%',
          end: 'center bottom',
          once: true,
          markers: true
        }
      })
        .to(productsListItem, fadeUpSetting)
    }
  }

  if (document.querySelector('.page-head')) {
    const pageHeadItems = [
      ...document.querySelectorAll('.page-head__title'),
      ...document.querySelectorAll('.page-head__quote'),
      ...document.querySelectorAll('.page-head__descr'),
      ...document.querySelectorAll('.page-head__buttons')
    ]
    gsap.timeline({
      scrollTrigger: {
        trigger: '.page-head',
        start: 'top 70%',
        end: 'center bottom',
        once: true
      }
    }).to(pageHeadItems, { ...fadeUpSetting, stagger: 0.15 })
  }

  if (document.querySelector('.products-packaging')) {
    gsap.timeline({
      scrollTrigger: {
        trigger: '.products-packaging',
        start: 'top 70%',
        end: 'center bottom',
        once: true
      }
    }).to('.products-packaging__img img', {
      opacity: 1,
      scale: 1,
      stagger: 0.1,
      duration: 0.4
    })
  }

  if (document.querySelector('.quality')) {
    gsap.timeline({
      scrollTrigger: {
        trigger: '.quality',
        start: 'top 80%',
        end: 'center bottom',
        once: true
      }
    }).to('.quality', fadeUpSetting)
  }

  if (document.querySelector('.geography-presence')) {
    gsap.timeline({
      scrollTrigger: {
        trigger: '.geography-presence',
        start: 'top 80%',
        end: 'center bottom',
        once: true
      }
    }).to('.geography-presence__country', { ...fadeUpSetting, stagger: 0.1 })
  }

  if (document.querySelector('.our-partners--grid')) {
    gsap.timeline({
      scrollTrigger: {
        trigger: '.our-partners--grid',
        start: 'top 80%',
        end: 'center bottom',
        once: true
      }
    }).to('.our-partners--grid .our-partners__item', { ...fadeUpSetting, stagger: 0.1 })
  }

  if (document.querySelector('.interview-stages')) {
    gsap.timeline({
      scrollTrigger: {
        trigger: '.interview-stages__stages',
        start: 'top center',
        end: 'center bottom',
        once: true
      }
    })
      .to('.interview-stages__stages .ui-h2', fadeUpSetting)
      .to('.interview-stages__item', { ...fadeUpSetting, stagger: 0.1 })
  }

  if (document.querySelector('.joint-rest')) {
    gsap.timeline({
      scrollTrigger: {
        trigger: '.joint-rest',
        start: 'top 60%',
        end: 'center bottom',
        once: true
      }
    }).to('.joint-rest__item img', { opacity: 1, scale: 1, stagger: 0.2 })
  }

  if (document.querySelector('.product-quality')) {
    const items = [...document.querySelector('.product-quality').children]
    gsap.timeline({
      scrollTrigger: {
        trigger: '.product-quality',
        start: 'top 70%',
        end: 'center bottom',
        once: true
      }
    })
      .to(items, { ...fadeUpSetting, stagger: 0.25 })
  }
}
