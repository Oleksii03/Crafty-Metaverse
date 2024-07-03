import { createMobileMenu } from './mobile-menu';
import { createRoadmap } from './roadmap';
import { createAccordionFaq } from './accordion-faq';
import { footer } from './footer';

document.addEventListener('DOMContentLoaded', () => {
  createMobileMenu();
  createRoadmap();
  createAccordionFaq();
  footer();
});
