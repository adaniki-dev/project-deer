import styled from 'styled-components';

export const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 4rem 0;
  gap: 2rem;

  .about_title {
    font-size: 2.4rem;
  }

  .about_professional_conteiner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 8rem;
    gap: 0.5rem;
  }

  .about_professional_title {
    font-size: 1.8rem;
    font-weight: 700;
  }

  .about_professional_list {
    display: flex;
    margin-top: 2rem;
    gap: 2.5rem;
  }

  .about_professional_list_comment {
    display: flex;
    flex-direction: column;
    font-size: 1.4rem;
    text-align: start;
    max-width: 360px;
    border-radius: 1rem;
    background: linear-gradient(
      100.87deg,
      rgba(255, 255, 255, 0.4) -16.61%,
      rgba(255, 255, 255, 0.1) 58.59%
    );
    box-shadow: rgb(0 0 0 / 25%) 0px 4px 24px -1px;
    backdrop-filter: blur(10px);
    padding: 1rem 2rem;
    gap: 0.8rem;

    span {
      display: flex;
      width: 2.5rem;
      height: 2.5rem;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      border: 2px solid black;
      border-radius: 100%;
    }
  }

  @media screen and (max-width: 900px) {
    .about_professional_conteiner {
      padding: 0 1.5rem;
    }
    .about_professional_list {
      flex-direction: column;
    }
  }
`;
