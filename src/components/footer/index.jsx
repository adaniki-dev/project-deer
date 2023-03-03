import React from 'react';

import { GrGithub, GrLinkedin } from 'react-icons/gr';

import { FooterContainer } from './style';

export function Footer() {
  return (
    <FooterContainer id="footer">
      <div className="contact_container">
        <h3 className="contact_title">Contato</h3>
        <address className="contact_address_container">
          <div className="contact_address_container_content">
            <span>Telefone:</span>
            <a href="tel:+5511999999999">+55 11 99999-9999</a>
          </div>
          <div className="contact_address_container_content">
            <span>Email:</span>
            <a href="mailto:ikiyoshikai@gmail.com">Email@gmail.com</a>
          </div>
          <div className="contact_address_container_content">
            <span>Endereço:</span>
            <p>Brasil, São Paulo - São Paulo</p>
          </div>
        </address>
      </div>
      <div className="contact_container">
        <h3 className="contact_title">Redes Sociais</h3>
        <div className="social_links_container">
          <a
            href="https://www.youtube.com/channel/UCZ1Z1Z1Z1Z1Z1Z1Z1Z1Z1Z1"
            target="_blank"
            rel="noreferrer"
          >
            <GrGithub />
          </a>
          <a
            href="https://www.youtube.com/channel/UCZ1Z1Z1Z1Z1Z1Z1Z1Z1Z1Z1"
            target="_blank"
            rel="noreferrer"
          >
            <GrLinkedin />
          </a>
        </div>
      </div>
    </FooterContainer>
  );
}
