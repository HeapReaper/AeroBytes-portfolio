// src/pages/About.ts

import 'swiper/swiper-bundle.css';

import imageHbc from '@img/testimonials/handbuildcomputer.png';
import imageTrmc from '@img/testimonials/trmc.png';

export function Testimonials(): HTMLElement {
  const testimonialsSection: HTMLElement = document.createElement('section');
  testimonialsSection.className = 'testimonials section';
  testimonialsSection.id = 'testimonials';

  testimonialsSection.innerHTML = `
    <div class="container section-title" data-aos="fade-up">
      <h2>
        Testimonials
      </h2>
      <p>
        What people think of my work
      </p>
    </div>
    
    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="swiper init-swiper">
        <script class="swiper-config" type="application/json">
          {
            "loop": true,
            "speed": 600,
            "autoplay": {
              "delay": 5000
            },
            "slidesPerView": "auto",
            "pagination": {
              "el": ".swiper-pagination",
              "type": "bullets",
              "clickable": true
            }
          }
        </script>
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="testimonial-item">
              <div class="row gy-4 justify-content-center">
                <div class="col-lg-6">
                  <div class="testimonial-content">
                    <p>
                      <i class="bi bi-quote quote-icon-left"></i>
                      <span>
                        I am super happy with Kelvin's services! He makes sure my website always runs fast and secure, and communication is smooth and hassle-free. That's what we as Rotterdammers like. Always available, quick with solutions - highly recommended for carefree website management!
                      </span>
                      <i class="bi bi-quote quote-icon-right"></i>
                    </p>
                    <h3>Sander Den Breejen</h3>
                    <h4>Ceo &amp; Founder HandBuildComputers</h4>
                  </div>
                </div>
                <div class="col-lg-2 text-center">
                  <img alt=""
                       class="img-fluid testimonial-img" src="${imageHbc}">
                </div>
              </div>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="testimonial-item">
              <div class="row gy-4 justify-content-center">
                <div class="col-lg-6">
                  <div class="testimonial-content">
                    <p>
                      <i class="bi bi-quote quote-icon-left"></i>
                      <span>
                        I am the secretary of the Twentse Radio Modelvliegtuig Club TRMC. Fortunately, we have Kelvin as a member in our beautiful active association. Kelvin offered his services to host our website www.trmc.nl and to update it together with me. In addition, Kelvin has created a club manager for us in which we can keep track of flights made but also communicate via email with our members. The membership file is also kept in it. We are very happy with his service, the website and the club manager are running to our full satisfaction and more importantly everything is well secured.
                      </span>
                      <i class="bi bi-quote quote-icon-right"></i>
                    </p>
                    <h3>Wim</h3>
                    <h4>Secretary TRMC</h4>
                  </div>
                </div>
                <div class="col-lg-2 text-center">
                  <img alt="" class="img-fluid testimonial-img"
                       src="${imageTrmc}">
                </div>
              </div>
            </div>
          </div>

        </div>
        <div class="swiper-pagination"></div>
      </div>

    </div>
  `;

  return testimonialsSection;
}