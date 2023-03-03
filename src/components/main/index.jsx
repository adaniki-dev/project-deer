import React from 'react';
import { MainContainer } from './style';

export function Main() {
  return (
    <MainContainer id="main">
      <div className="main_content">
        <h1 className="main_content_title">Front-end Developer</h1>
        <p className="main_content_text">
          Olá, meu nome é <strong>Adam</strong> e sou um desenvolvedor front-end
        </p>
      </div>
    </MainContainer>
  );
}
