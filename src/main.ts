import './style.css';

import { Navbar } from '@components/Navbar';
import { Footer } from '@components/Footer';
import { Hero } from '@pages/Hero.ts';
import { About } from '@pages/About.ts';
import { Resume } from '@pages/Resume.ts';
import { Tools } from '@pages/Tools.ts';
import { Services } from '@pages/Services.ts';
// import { Testimonials } from '@pages/Testimonials.ts';

const app: HTMLElement | null = document.querySelector<HTMLDivElement>('#app');

if (app) {
  app.appendChild(Navbar());
  app.appendChild(Hero());
  app.appendChild(About());
  app.appendChild(Resume());
  app.appendChild(Tools());
  app.appendChild(Services());
  //app.appendChild(Testimonials());
  app.appendChild(Footer());
} else {
  throw new Error('Element with ID app not found in main.ts!');
}


