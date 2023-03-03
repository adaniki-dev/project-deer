import React from 'react';
import { ServiceContainer } from './style';

export function Service() {
  return (
    <ServiceContainer id="experience">
      <h2 className="service_title">Experiências</h2>
      <div className="service_conteiner">
        <p className="service_conteiner_comment">
          Trabalho com desenvolvimento front-end desde 2020, atualmente estou
          estudando Low Code e UX/UI.
        </p>
        <p className="service_conteiner_comment">
          Tenho experiência com HTML, CSS, JavaScript, ReactJS, TypeScript,
        </p>
        <p className="service_conteiner_comment">
          Conhecimento com metodologia ágil, Git, Docker. Utilizo ferramentas
          como VSCode, Insomnia, Postman, Figma, ClickUp, Jira.
        </p>
      </div>
      <div className="services_experience_conteiner">
        <div className="services_experience">
          <h3 className="services_experience_title">ReactJS</h3>
        </div>
        <div className="services_experience">
          <h3 className="services_experience_title">HTML</h3>
        </div>
        <div className="services_experience">
          <h3 className="services_experience_title">CSS</h3>
        </div>
        <div className="services_experience">
          <h3 className="services_experience_title">TypeScript</h3>
        </div>
      </div>
    </ServiceContainer>
  );
}
