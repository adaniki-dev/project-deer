import React, { useEffect } from 'react';
import { HeaderContainer } from './style';

export function Header() {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const header = document.querySelector('header');
      header.classList.toggle('scroll_effect', window.scrollY > 0);
    });
  }, []);

  return (
    <HeaderContainer>
      <a
        className="logo white_color"
        href="/"
        onClick={(e) => {
          let hero = document.getElementById('main');
          e.preventDefault();
          hero && hero.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }}
      >
        Logo
      </a>
      <nav className="header_navbar">
        <ul className="header_navbar_links">
          <li className="header_navbar_link">
            <a
              className="white_color"
              href="/"
              onClick={(e) => {
                let hero = document.getElementById('experience');
                e.preventDefault();
                hero &&
                  hero.scrollIntoView({
                    behavior: 'smooth',
                    block: 'end',
                  });
              }}
            >
              Experiências
            </a>
          </li>
          <li className="header_navbar_link button_styled">
            <a
              className="white_color"
              href="/"
              onClick={(e) => {
                let hero = document.getElementById('footer');
                e.preventDefault();
                hero &&
                  hero.scrollIntoView({ behavior: 'smooth', block: 'end' });
              }}
            >
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  );
}
