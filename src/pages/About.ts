// src/pages/About.ts

import Me from '@img/Me.png';

export function About(): HTMLElement {
	const aboutSection: HTMLElement = document.createElement('section');
	aboutSection.className = 'about section';
	aboutSection.id = 'about';
	
	aboutSection.innerHTML = `
    <div class="container section-title" data-aos="fade-up">
      <h2>
        About
      </h2>
    </div>

    <div class="container fade-up" data-aos="fade-up" data-aos-delay="100">
      <div class="row gy-4 justify-content-center">
        <div class="col-lg-4 justify-content-center" style="text-align: center;">
          <img alt="" class="img-fluid" src="${Me}" style="width: 200px;">
        </div>
        <div class="col-lg-8 content">
          <h2>
            Web developer, IT fanatic and RC pilot.
          </h2>
          <p class="fst-italic py-3">
            I'm a tech enthusiast with a passion for programming, web hosting, hardware, software, and electronics.<br>
            I love building innovative and functional projects.<br>
            In my spare time, I enjoy hitting the gym and flying RC planes and drones with my local RC club.
          </p>
          <div class="row">
            <div class="col-lg-6">
              <ul>
                <li>
                  <i class="bi bi-chevron-right"></i>
                  <strong>
                    Birthday:
                  </strong>
                  <span>
                    11 may 2001
                  </span>
                </li>
                <li><i class="bi bi-chevron-right"></i> <strong>Website:</strong> <span>portfolio.aerobytes.nl</span>
                </li>
                <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Groenlo, Netherlands</span>
                </li>
              </ul>
            </div>
            <div class="col-lg-6">
              <ul>
                <li><i class="bi bi-chevron-right"></i>
                	<strong>
                		Age:
                	</strong>
                	<span>
                		${calculateAge('2001-05-11')}
                  </span></li>
                <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>work@aerobytes.nl</span>
                </li>
                <li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong>
                  <span>Available</span></li>
              </ul>
            </div>
          </div>
          <p class="py-3">
          </p>
        </div>
      </div>
    </div>
  `;
	
	return aboutSection;
}

/**
 * Calculates current age
 *
 * @param birthdate format: yyyy-mm-dd
 * @returns number age
 */
function calculateAge(birthdate: string): number {
	const birth: Date = new Date(birthdate);
	const today: Date = new Date();
	
	let age: number = today.getFullYear() - birth.getFullYear();
	const monthDifference: number = today.getMonth() - birth.getMonth();
	const dayDifference: number = today.getDate() - birth.getDate();
	
	if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
		age--;
	}
	
	return age;
}