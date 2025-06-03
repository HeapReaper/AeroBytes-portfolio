import imageCode from '@img/services/code.webp';

export function Projects() {
	const servicesSection: HTMLElement = document.createElement('section');
	servicesSection.className = 'projects section';
	servicesSection.id = 'projects';
	
	servicesSection.innerHTML = `
	  <div class="container section-title" data-aos="fade-up">
      <h2>
        Projects
	  </h2>
    </div>
    
    <div class="container">
      <div class="row gy-4">

        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
          <div class="projects-item item-orange position-relative">
            <div class="icon">
              <img height="100" src="${imageCode}" width="100">
            </div>
            <a class="stretched-link" href="https://github.com/AeroBytesNL/AllDayBot-TS" target="_blank">
              <h3>AllDayBot</h3>
            </a>
            <p>
              An Discord bot written in TS. It has canvas reactions, a custom module structure and a nice database abstraction!
            </p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
          <div class="projects-item item-cyan position-relative">
            <div class="icon">
              <img height="100" src="${imageCode}" width="100">
            </div>
            <a class="stretched-link" href="https://github.com/AeroBytesNL/Kiyomi" target="_blank">
              <h3>Kiyomi</h3>
            </a>
      			<p>
      	   		An Laravel based application to create articles, manage flights, members, send newsletters and a lot more!
      			</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
          <div class="projects-item item-teal position-relative">
            <div class="icon">
              <img height="100" src="${imageCode}" width="100">
            </div>
            <a class="stretched-link" href="https://github.com/AeroBytesNL/QuickPoll" target="_blank">
              <h3>QuickPoll</h3>
            </a>
            <p>
              An AdonisJS based website to create quick polls!
	       		</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
          <div class="projects-item item-teal position-relative">
            <div class="icon">
              <img height="100" src="${imageCode}" width="100">
            </div>
            <a class="stretched-link" href="https://github.com/AeroBytesNL/UptimeKuma-custom-status-page-theme" target="_blank">
              <h3>Uptime Kuma theme</h3>
            </a>
            <p>
              An nice looking theme for UptimeKuma, whichs is shown on my uptime page!
	       		</p>
          </div>
        </div>

      </div>
    </div>
	`;
	
	return servicesSection;
}