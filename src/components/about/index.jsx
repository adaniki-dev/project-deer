import React from 'react';

import { AboutContainer } from './style';

export function About() {
  return (
    <AboutContainer id="about">
      <h2 className="about_title">Experiencia Profissional</h2>
      <div className="about_professional_conteiner">
        <ul className="about_professional_list">
          <li className="about_professional_list_comment">
            Otimização do sistema, com melhoria após refatorações e
            estruturação, resolvendo maior parte do bugs e lentidões.
          </li>
          <li className="about_professional_list_comment">
            Melhora na usabilidade do sistema, melhorando o fluxo do usuário e
            diminuindo erros durante o percurso utilizando métodos de UX e
            Vieses Cognitivos.
          </li>
          <li className="about_professional_list_comment">
            Criação de novas funcionalidades e automações para o sistema
            financeiro da empresa, otimizando o seu fluxo de tempo e caixa.
          </li>
          <li className="about_professional_list_comment">
            Criação de novo sistema de gestão utilizando low code para
            automatização de processos e otimização de tempo.
          </li>
        </ul>
      </div>
    </AboutContainer>
  );
}
