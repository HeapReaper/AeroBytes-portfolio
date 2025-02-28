import AOS from 'aos';
import Typed from 'typed.js';

/**
 * Animation on scroll function and init
 */
function aosInit() {
  AOS.init({
    duration: 600,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });
}
window.addEventListener('load', aosInit);

/**
 * Typed text function and init
 */
document.addEventListener('DOMContentLoaded', () => {
  const selectTyped: Element | null = document.querySelector('.typed');

  if (!selectTyped) return;

  let typedArray: array = [selectTyped.getAttribute('data-typed-items')];

  new Typed('.typed', {
    strings: typedArray,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 2000,
    startDelay: 1000,
    loop: true,
  });
});