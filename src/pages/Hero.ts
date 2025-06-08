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
              data-typed-items="">
            </span>
            <span
              aria-hidden="true" class="typed-cursor typed-cursor--blink">
          </span>
          </p>
          <div class="social-links">
            <a class="text-white image-hover-resize-10-shadow" href="https://github.com/HeapReaper" target="_blank">
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

const quotes = [
  `"Talk is cheap. Show me the code." — Linus Torvalds`,
  `"If you automate a mess, you get an automated mess." — Rod Michael`,
  `"Security is not a product, it's a process." — Bruce Schneier`,
  `"The best way to predict the future is to invent it." — Alan Kay`,
  `"Programs must be written for people to read, and only incidentally for machines to execute." — Harold Abelson`,
  `"The only way to go fast, is to go well." — Robert C. Martin`,
  `"You don’t secure a system by hoping nobody finds the vulnerabilities — you secure it by assuming they will."`,
  `"In theory, there is no difference between theory and practice. But, in practice, there is." — Jan L. A. van de Snepscheut`,
  `"First, solve the problem. Then, write the code." — John Johnson`,
  `"There are two ways of constructing a software design: one way is to make it so simple that there are obviously no deficiencies… and the other way is to make it so complicated that there are no obvious deficiencies." — Tony Hoare`,
  `"Failure is simply the opportunity to begin again, this time more intelligently." — Henry Ford`,
  `"Good code is its own best documentation." — Steve McConnell`,
];

/**
 * Type animation for the hero section
 *
 * @returns void
 */
document.addEventListener('DOMContentLoaded', (): void => {
  const selectTyped: Element | null = document.querySelector('.typed');

  if (!selectTyped) return;

  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  selectTyped.setAttribute('data-typed-items', quote);

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