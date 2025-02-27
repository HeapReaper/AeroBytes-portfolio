// src/components/Navbar.ts

export function Navbar(): HTMLElement {
  const header: HTMLElement = document.createElement('header');
  header.id = 'header';
  header.classList.add('header', 'd-flex', 'flex-column', 'justify-content-center');
  header.innerHTML = `
    <i class="header-toggle d-xl-none bi bi-list"></i>
    <nav class="navmenu" id="navmenu">
      <ul>
        <li><a class="active" href="#hero"><i class="bi bi-house navicon"></i><span>Home</span></a></li>
        <li><a href="#about"><i class="bi bi-person navicon"></i><span>About</span></a></li>
        <li><a href="#resume"><i class="bi bi-file-earmark-text navicon"></i><span>Resume</span></a></li>
        <li><a href="#tools"><i class="bi bi-tools navicon"></i><span>Tools, languages</span></a></li>
        <li><a href="#services"><i class="bi bi-hdd-stack navicon"></i><span>What i do</span></a></li>
        <li><a href="https://uptime.aerobytes.nl/status/main" target="_blank"><i class="bi bi-diagram-2 navicon"></i><span>Uptime page</span></a></li>
      </ul>
    </nav>
  `;

  return header;
}