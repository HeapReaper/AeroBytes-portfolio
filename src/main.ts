import './style.css';
import AOS from 'aos';

import { Navbar } from '@components/Navbar';
import { Footer } from '@components/Footer';
import { Hero } from '@pages/Hero.ts';
import { About } from '@pages/About.ts';
import { Resume } from '@pages/Resume.ts';
import { Tools } from '@pages/Tools.ts';
import { Projects } from '@pages/Projects.ts';

const app: HTMLElement | null = document.querySelector<HTMLDivElement>('#app');

if (app) {
  AOS.init();
  app.appendChild(Navbar());
  app.appendChild(Hero());
  app.appendChild(About());
  app.appendChild(Resume());
  app.appendChild(Tools());
  app.appendChild(Projects());
  //app.appendChild(Testimonials());
  app.appendChild(Footer());
} else {
  throw new Error('Element with ID app not found in main.ts!');
}


