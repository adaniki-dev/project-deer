import styled from 'styled-components';
import img from '../../assets/backgrounds/background.jpg';

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${img});
  background-size: cover;
  padding: 8rem 0;
  height: 100vh;
  width: 100%;

  .main_content {
    width: 560px;
    height: 280px;
    background: linear-gradient(
      100.87deg,
      rgba(255, 255, 255, 0.4) -16.61%,
      rgba(255, 255, 255, 0.1) 58.59%
    );
    box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(10px);
    border-radius: 32px;
    padding: 3rem 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  .main_content_title {
    color: #2a044f;
    font-size: 2.4rem;
  }

  .main_content_text {
    color: #2a044f;
    font-size: 1.4rem;
    text-align: center;
  }
`;
