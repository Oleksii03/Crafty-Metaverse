import { createMobileMenu } from './mobile-menu'
import { createRoadmap } from './roadmap'
import { createAccordionFaq } from './accordion-faq'

document.addEventListener('DOMContentLoaded', () => {
  createMobileMenu()
  createRoadmap()
  createAccordionFaq()
})
