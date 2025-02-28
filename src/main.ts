import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'glightbox/dist/css/glightbox.min.css';
import 'swiper/swiper-bundle.css';
import { Navbar } from '@components/Navbar';
import { Hero } from '@components/Hero';

const app: HTMLElement | null = document.querySelector<HTMLDivElement>('#app');

if (app) {
  app.appendChild(Navbar());
  app.appendChild(Hero());
} else {
  throw new Error('Element with ID app not found in main.ts!');
}

