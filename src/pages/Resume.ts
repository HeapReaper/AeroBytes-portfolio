// src/pages/Resume.ts

export function Resume(): HTMLElement {
  const resumeSection: HTMLElement = document.createElement('section');
  resumeSection.className = 'resume section';
  resumeSection.id = 'resume';
  
  resumeSection.innerHTML = `
    <div class="container section-title" data-aos="fade-up">
      <h2>
      Resume
      </h2>
    </div>
    
        <div class="container">
      <div class="row">
        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
          <h3 class="resume-title">Professional Experience</h3>
          <div class="resume-item">
            <h4>Software developer</h4>
            <h5>11-2024 - 12-2024</h5>
            <p><em>Hanninkhof.de</em></p>
            <ul>
              <li>
                Software development
              </li>
              <li>
                Development off an paying, booking and customer management system for an vacation home
                company
              </li>
              <li>
                also helping them configuring their company website
              </li>
            </ul>
          </div>

          <div class="resume-item">
            <h4>Helpdesk employee</h4>
            <h5>02-2022 - 06-2022</h5>
            <p><em>Teleperformance, Netherlands</em></p>
            <ul>
              <li>
                First line helpdesk
              </li>
              <li>
                Giving tech support to employees
              </li>
              <li>
                Making manuals for other helpdesk employees
              </li>
            </ul>
          </div>

          <div class="resume-item">
            <h4>IT EMPLOYEE</h4>
            <h5>11-2021 - 12-2021</h5>
            <p><em>Centralpoint, Netherlands</em></p>
            <ul>
              <li>IT migration, delivering laptops to employees</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <h3 class="resume-title">Services i run for others</h3>

          <div class="resume-item pb-0">
            <h4>festivalkleintjehollands.nl</h4>
            <ul>
              <li>Web hosting</li>
              <li>Mailserver hosting</li>
              <li><a href="https://festivalkleintjehollands.nl" target="_blank">festivalkleintjehollands.nl</a></li>
            </ul>
          </div>

          <div class="resume-item pb-0">
            <h4>TRMC.nl</h4>
            <ul>
              <li>Web hosting</li>
              <li>Mailserver hosting</li>
              <li>Web development</li>
              <li><a href="https://trmc.nl" target="_blank">trmc.nl</a></li>
            </ul>
          </div>
          
          <div class="resume-item pb-0">
            <h4>dyllo-entertainment.nl</h4>
            <ul>
              <li>Web hosting</li>
              <li>Mailserver hosting</li>
              <li><a href="https://dyllo-entertainment.nl" target="_blank">dyllo-entertainment.nl</a></li>
            </ul>
          </div>
          
          <div class="resume-item pb-0">
            <h4>AllDayTechAndGaming.nl</h4>
            <ul>
              <li>Web hosting</li>
              <li>Mailserver hosting</li>
              <li>Web and Discord bot development</li>
              <li><a href="https://alldaytechandgaming.nl" target="_blank">AllDayTechAndGaming.nl</a></li>
            </ul>
          </div>
        </div>

        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <h3 class="resume-title">Projects</h3>
          <div class="resume-item pb-0">
            <h4>Kiyomi</h4>
            <p>
              <em>
                A custom solution built for <a href="https://trmc.nl" target="_blank">TRMC</a>. It
                allows for club members to register their flights easily before taking flight on the
                club field. Management from TRMC can then view the flights, export them for the local authority and more.
              </em>
            </p>
            <ul>
              <li>
                <div class="social-links">
                  <a class="text-white" href="https://github.com/AeroBytesNL/Kyomi-V2" target="_blank">
                    <i class="bi bi-github"></i> Github
                  </a>
                </div>
              </li>
              <li>In active development</li>
            </ul>
          </div>

          <div class="resume-item pb-0">
            <h4>CheckStack</h4>
            <p><em>An uptime monitor, because the existing one's didn't fit my need</em></p>
            <ul>
              <li>
                <div class="social-links">
                  <a class="text-white" href="https://github.com/AeroBytesNL/CheckStack" target="_blank">
                    <i class="bi bi-github"></i> Github
                  </a>
                </div>
              </li>
              <li>In active development</li>
            </ul>
          </div>

          <div class="resume-item pb-0">
            <h4>Contributor Invoiceplane</h4>
            <p><em>An Invoice management system. Fixing bugs for V1. Contributor V2.</em></p>
            <ul>
              <li>
                <div class="social-links">
                  <a class="text-white" href="https://github.com/InvoicePlane" target="_blank">
                    <i class="bi bi-github"></i> Github
                  </a>
                </div>
              </li>
              <li>Still ongoing</li>
            </ul>
          </div>
        </div>

        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <h3 class="resume-title">Projects</h3>

          <div class="resume-item pb-0">
            <h4>Wordpress plugin</h4>
            <p><em>A Wordpress plugin to send a notification to<br> a Discord channel when a new article has been posted</em></p>
            <ul>
              <li>
                <div class="social-links">
                  <a class="text-white" href="https://github.com/AeroBytesNl/Wordpress-posts-to-Discord" target="_blank">
                    <i class="bi bi-github"></i> Github
                  </a>
                </div>
              </li>
              <li>Finished</li>
            </ul>
          </div>
          
          <div class="resume-item pb-0">
            <h4>Get my IP</h4>
            <p><em>I was done with pulling 10MB+ to get my WAN IP. So I've made my own!</em></p>
            <ul>
              <li>
                <div class="social-links">
                  <a class="text-white" href="https://github.com/AeroBytesNl/get-my-ip" target="_blank">
                    <i class="bi bi-github"></i> Github
                  </a>
                </div>
              </li>
              <li>Finished</li>
            </ul>
          </div>

          <div class="resume-item pb-0">
            <h4>AllDayBot</h4>
            <p><em>A Discord bot built for a tech & gaming community</em></p>
            <ul>
              <li>
                <div class="social-links">
                  <a class="text-white" href="https://github.com/AeroBytesNL/AllDayBot" target="_blank">
                    <i class="bi bi-github"></i> Github
                  </a>
                </div>
              </li>
              <li>In passive development</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;

  return resumeSection;
}