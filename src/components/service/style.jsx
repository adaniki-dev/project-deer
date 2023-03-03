import styled from 'styled-components';

export const ServiceContainer = styled.section`
  width: 100%;
  height: 40vh;
  background: #f4faff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;
  gap: 1.5rem;

  .service_title {
    font-size: 2.4rem;
    font-weight: 700;
    color: #2a044f;
  }

  .service_conteiner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  .service_conteiner_comment {
    font-size: 1.2rem;
  }

  .services_experience_conteiner {
    display: flex;
    width: 100%;
    margin-top: 1.5rem;
    padding: 0 8rem;
    justify-content: center;
    gap: 1rem;
  }

  .services_experience {
    display: flex;
    padding: 1rem 2rem;
    background: linear-gradient(
      100.87deg,
      rgba(255, 255, 255, 0.4) -16.61%,
      rgba(255, 255, 255, 0.1) 58.59%
    );
    box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(10px);
    border-radius: 32px;
  }

  .services_experience_title {
    font-size: 1.4rem;
    font-weight: 700;
    color: #2a044f;
  }
`;
