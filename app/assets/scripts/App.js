import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';

let menu = new MobileMenu();
new RevealOnScroll( $('.feature-item'), '85%' );
new RevealOnScroll( $('.testimonial'), '60%' );
