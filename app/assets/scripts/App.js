import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StikyHeader from './modules/StikyHeader';

let menu = new MobileMenu();
new RevealOnScroll( $('.feature-item'), '85%' );
new RevealOnScroll( $('.testimonial'), '60%' );
let stikyHeader = new StikyHeader();
