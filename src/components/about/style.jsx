import styled from 'styled-components';

export const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 40vh;
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
    font-size: 1.4rem;
    text-align: start;
    flex: 1 1 auto;
  }
`;
