import imageCode from '@img/services/code.webp';
import imageServer from '@img/services/server.webp';
import imageEmail from '@img/services/email.webp';
import imageSite from '@img/services/site.webp';
import imageThinker from '@img/services/thinker.webp';
import imageCad from '@img/services/cad.webp';

export function Projects() {
	const servicesSection: HTMLElement = document.createElement('section');
	servicesSection.className = 'services section';
	servicesSection.id = 'services';
	
	servicesSection.innerHTML = `
	  <div class="container section-title" data-aos="fade-up">
      <h2>
        Projects
	  </h2>
    </div>
    
    <div class="container">
      <div class="row gy-4">
        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
          <div class="service-item item-cyan position-relative">
            <div class="icon">
              <img height="100" src="${imageCode}" width="100">
            </div>
            <a class="stretched-link" href="">
              <h3>Software development</h3>
            </a>
          </div>
        </div>

        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
          <div class="service-item item-orange position-relative">
            <div class="icon">
              <img height="100" src="${imageServer}" width="100">
            </div>
            <a class="stretched-link" href="">
              <h3>Hosting</h3>
            </a>
            <p>Hosting websites, databases and Discord bots on Ubuntu server 22.04 and 24.04 LTS.</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
          <div class="service-item item-teal position-relative">
            <div class="icon">
              <img height="100" src="${imageEmail}" width="100">
            </div>
            <a class="stretched-link" href="">
              <h3>E-mail hosting</h3>
            </a>
            <p>Hosting E-mail services with Exim, Dovecot and an SMTP relay.</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
          <div class="service-item item-red position-relative">
            <div class="icon">
              <img height="100" src="${imageSite}" width="100">
            </div>
            <a class="stretched-link" href="">
              <h3>Web management</h3>
            </a>
            <p>Managing websites like WordPress.</p>
            <a class="stretched-link" href="#"></a>
          </div>
        </div>

        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
          <div class="service-item item-indigo position-relative">
            <div class="icon">
              <img height="100" src="${imageThinker}" width="100">
            </div>
            <a class="stretched-link" href="">
              <h3>Thinkering</h3>
            </a>
            <p>I love to thinker with hardware, software and electronics.</p>
            <a class="stretched-link" href="#"></a>
          </div>
        </div>

        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
          <div class="service-item item-pink position-relative">
            <div class="icon">
              <img height="100" src="${imageCad}" width="100">
            </div>
            <a class="stretched-link" href="">
              <h3>CAD</h3>
            </a>
            <p>Creating designs for my hobby in the RC world</p>
            <a class="stretched-link" href="#"></a>
          </div>
        </div>
      </div>
    </div>
	`;
	
	return servicesSection;
}