import Typed from 'typed.js';

/**
 * Type animation for the hero section
 *
 * @returns void
 */
document.addEventListener('DOMContentLoaded', (): void => {
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