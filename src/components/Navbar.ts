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
        <li><a href="#projects"><i class="bi bi-pc-display navicon"></i><span>Projects</span></a></li>
        <li><a href="https://uptime.aerobytes.nl/status/main" target="_blank"><i class="bi bi-diagram-2 navicon"></i><span>Uptime page</span></a></li>
      </ul>
    </nav>
  `;

  return header;
}

/**
 * Navbar logic
 */
document.addEventListener('DOMContentLoaded', (): void => {
  const headerToggleBtn: Element | null = document.querySelector('.header-toggle');
  const header: Element | null = document.querySelector('.header');
  const nav: Element | null = document.querySelector('.navmenu');
  
  if (!headerToggleBtn) return console.error('headerToggleBtn not found');
  if (!header) return console.error('headerToggleBtn not found');
  
  /**
   * Shows navbar
   */
  headerToggleBtn.addEventListener('click', (): void => {
    header.classList.toggle('header-show');
  })
  
  /**
   * Hides navbar when clicking on nav item on mobile
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', (): void => {
      if (!document.querySelector('.header-show')) return;
      
      header.classList.toggle('header-show')
    });
  });
  
  /**
   * Hides navbar if clicking outside navbar on mobile
   */
  document.addEventListener('click', (event): void => {
    // @ts-ignore
    if (nav.contains(event.target) || event.target.classList.contains('header-toggle')) return;
    
    header.classList.toggle('header-show');
  });
  
  /**
   * Puts right nav item on active if scrolling
   */
  let navMenuLinks = document.querySelectorAll('.navmenu a');
  document.addEventListener('scroll', (): void => {
    navMenuLinks.forEach(navMenuLink => {
      // @ts-ignore
      if (!navMenuLink.hash) return;
      
      // @ts-ignore
      let section = document.querySelector(navMenuLink.hash);
      if (!section) return;
      
      let position: number = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        return navMenuLink.classList.add('active');
      }
      navMenuLink.classList.remove('active');
    })
  });
})