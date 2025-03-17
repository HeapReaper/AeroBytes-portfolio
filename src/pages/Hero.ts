// src/pages/Hero.ts

import Typed from 'typed.js';
import planeImage from '/src/assets/img/plane-image-background.webp';

export function Hero(): HTMLElement {
  const heroSection: HTMLElement = document.createElement('section');
  heroSection.className = 'hero section light-background';
  heroSection.id = 'hero';

  heroSection.innerHTML = `
    <img alt="" class="main-background-custom" src="${planeImage}" />
    <div class="container" data-aos="zoom-out">
      <div class="row justify-content-center">
        <div class="col-lg-9">
          <h2 class="text-white main-hero-title" id="main-hero-title">
            <span>A</span><span>e</span><span>r</span><span>o</span><span>B</span><span>y</span><span>t</span><span>e</span><span>s</span>
          </h2>
          <p class="text-white">
            <span class="typed"
              data-typed-items="Just like flight, great development and hosting is about balance, efficiency, performance and control.">
            </span>
            <span
              aria-hidden="true" class="typed-cursor typed-cursor--blink">
          </span>
          </p>
          <div class="social-links">
            <a class="text-white image-hover-resize-10-shadow" href="https://github.com/AeroBytesNL" target="_blank">
              <i class="bi bi-github"></i>
            </a>
            <a class="text-white image-hover-resize-10-shadow" href="https://www.youtube.com/@AeroBytesNL" target="_blank">
              <i class="bi bi-youtube"></i>
            </a>
            <a class="text-white image-hover-resize-10-shadow" href="https://discord.gg/DEQ2RK8RQB" target="_blank">
              <i class="bi bi-discord"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  `;

  return heroSection;
}

/**
 * Type animation for the hero section
 *
 * @returns void
 */
document.addEventListener('DOMContentLoaded', (): void => {
  const selectTyped: Element | null = document.querySelector('.typed');

  if (!selectTyped) return;

  const typedArray: Array<any> = [selectTyped.getAttribute('data-typed-items')];

  new Typed('.typed', {
    strings: typedArray,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 2000,
    startDelay: 1000,
    loop: true,
  });
});