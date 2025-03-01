// src/pages/Tools.ts

import imagePhpStorm from '@img/icons/phpstorm.webp';
import imagePyCharm from '@img/icons/pycharm.webp';
import imageWebStorm from '@img/icons/WebStorm.webp';
import imageVsCode from '@img/icons/vscode.webp';
import imageGit from '@img/icons/git.webp';
import imageGitHub from '@img/icons/github-icon-2.webp';
import imageLaravel from '@img/icons/laravel.webp';
import imageLivewire from '@img/icons/livewire.webp';
import imageAlpineJS from '@img/icons/alpinejs.webp';
import imageBootstrap from '@img/icons/bootstrap.webp';
import imageTailWindCSS from '@img/icons/tailwindcss.webp';
import imageDisnake from '@img/icons/disnake-logo.webp';
import imageViteJS from '@img/icons/Vitejs-logo.webp';
import imagePhp from '@img/icons/php.webp';
import imagePython from '@img/icons/python.webp';
import imageJS from '@img/icons/js.webp';
import imageTS from '@img/icons/TS_logo.webp';
import imageHtml from '@img/icons/html5.webp';
import imageCss from '@img/icons/css3.webp';
import imageDocker from '@img/icons/docker.webp';
import imagelinux from '@img/icons/Tux.webp';
import imageMariaDB from '@img/icons/mariadb-logo-vert_blue-transparent.webp';
import imageMySQL from '@img/icons/mysql_logo.webp';
import imageProxmox from '@img/icons/proxmox.webp';
import imageCoolify from '@img/icons/coolify-logo.webp';

export function Tools(): HTMLElement {
  const toolsSection: HTMLElement = document.createElement('section');
  toolsSection.className = 'services section';
  toolsSection.id = 'tools';
  
  toolsSection.innerHTML = `
    <div class="container section-title" data-aos="fade-up">
      <h2>
        Tools, frameworks and coding languages
      </h2>
      <p>
        These are the ones I use the most.
      </p>
    </div>
    
    <div class="container">
      <div class="row gy-4 justify-content-center">
        <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
          <p align="center">
            <h2 align="center">Tools</h2>
            <div align="center">
              <div>
                <img src="${imagePhpStorm}" style="width: 45px;" />
                <p>PhpStorm</p>
              </div>
              <div>
                <img src="${imagePyCharm}" style="width: 45px;" />
                <p>PyCharm</p>
              </div>
              <div>
                <img src="${imageWebStorm}"" style="width: 45px;" />
                <p>WebStorm</p>
              </div>
              <div>
                <img src="${imageVsCode}" style="width: 45px;" />
                <p>VSCode</p>
              </div>
              <div>
                <img src="${imageGit}" style="width: 50px;" />
                <p>Git</p>
              </div>
              <div>
                <img src="${imageGitHub}" style="width: 45px;" />
                <p>GitHub</p>
              </div>
            </div>
          </p>
        </div>

        <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
          <p align="center">
            <h2 align="center">Frameworks</h2>
            <div align="center">
              <div>
                <img src="${imageLaravel}" style="width: 45px;" />
                <p>Laravel</p>
              </div>
              <div>
                <img src="${imageLivewire}" style="width: 50px;" />
                <p>Livewire</p>
              </div>
              <div>
                <img src="${imageAlpineJS}" style="width: 50px;" />
                <p>AlpineJS</p>
              </div>
              <div>
                <img src="${imageBootstrap}" style="width: 50px;" />
                <p>Bootstrap</p>
              </div>
              <div>
                <img src="${imageTailWindCSS}" style="width: 50px;" />
                <p>Tailwind CSS</p>
              </div>
              <div>
                <img src="${imageDisnake}" style="width: 50px;" />
                <p>Disnake</p>
              </div>
              <div>
                <img src="${imageViteJS}" style="width: 50px;" />
                <p>Vite</p>
              </div>
            </div>
          </p>
        </div>

        <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
          <p align="center">
            <h2 align="center">Languages</h2>
            <div align="center">
              <div>
                <img src="${imagePhp}" style="width: 60px;" />
                <p>PHP</p>
              </div>
              <div>
                <img src="${imagePython}" style="width: 50px;" />
                <p>Python</p>
              </div>
              <div>
                <img src="${imageJS}" style="width: 50px;" />
                <p>JavaScript</p>
              </div>
              <div>
                <img src="${imageTS}" style="width: 50px;" />
                <p>TypeScript</p>
              </div>
              <div>
                <img src="${imageHtml}" style="width: 50px;" />
                <p>HTML5</p>
              </div>
              <div>
                <img src="${imageCss}" style="width: 50px;" />
                <p>CSS3</p>
              </div>
            </div>
          </p>
        </div>

        <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
          <p align="center">
            <h2 align="center">Tech</h2>
            <div align="center">
              <div>
                <img src="${imageDocker}" style="width: 55px;" />
                <p>Docker</p>
              </div>
              <div>
                <img src="${imagelinux}" style="width: 55px;" />
                <p>Linux</p>
              </div>
              <div>
                <img src="${imageMariaDB}" style="width: 55px;" />
                <p>MariaDB</p>
              </div>
              <div>
                <img src="${imageMySQL}" style="width: 65px;" />
                <p>MySQL</p>
              </div>
              <div>
                <img src="${imageProxmox}" style="width: 50px;" />
                <p>Proxmox VE</p>
              </div>
              <div>
                <img src="${imageCoolify}" style="width: 65px;" />
                <p>Coolify</p>
              </div>
            </div>
          </p>
        </div>
      </div>
    </div>
  `;

  return toolsSection;
}