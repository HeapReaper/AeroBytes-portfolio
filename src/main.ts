import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'aos/dist/aos.css';
import 'glightbox/dist/css/glightbox.min.css';
import 'swiper/swiper-bundle.css';
import { Navbar } from '@components/Navbar';

const app: HTMLElement | null = document.querySelector<HTMLDivElement>('#app');

if (app) {
  app.appendChild(Navbar());
} else {
  throw new Error('Element with ID app not found in main.ts!');
}

