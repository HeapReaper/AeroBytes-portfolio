// src/components/Footer.ts

export function Footer(): HTMLElement {
  const footerElement: HTMLElement = document.createElement('footer');
  footerElement.className = 'footer position-relative';
  footerElement.id = 'footer';

  footerElement.innerHTML = `
    <div class="container">
      <div class="copyright">
        <span>
          Copyright
        </span> 
        <strong class="px-1 sitename">
          Kelvin de Reus 
        </strong> 
        ${new Date().getFullYear()}
      </div>
    </div>
  `;

  return footerElement;
}