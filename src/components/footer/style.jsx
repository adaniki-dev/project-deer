import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  width: 100%;
  background: rgb(42, 4, 79);
  justify-content: space-around;
  padding: 3rem 0;

  .contact_container {
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-top: 3rem;
  }

  .contact_title {
    color: rgb(244, 250, 255);
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .contact_address_container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .contact_address_container_content {
    display: flex;
    gap: 0.5rem;

    a,
    span,
    p {
      color: rgb(244, 250, 255);
    }
  }

  .social_links_container {
    display: flex;
    gap: 1rem;
    a {
      svg {
        fill: rgb(244, 250, 255);
        font-size: 2rem;
      }
    }
  }
`;
