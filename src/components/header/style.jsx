import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  width: 100vw;
  background: transparent;
  display: flex;
  align-items: center;
  height: 80px;
  padding: 0 8rem;
  z-index: 100;
  transition: all 0.4s ease-in-out;

  &:before {
    content: ' ';
    position: absolute;
    bottom: -4px;
    left: 0;
    background: transparent;
    width: 100vw;
    height: 4px;
  }

  .logo {
    font-size: 1.8rem;
    font-weight: 700;
  }

  .header_navbar {
    margin-left: auto;
  }

  .header_navbar_links {
    display: flex;
    align-items: center;
    gap: 4rem;
  }

  .header_navbar_link {
    font-size: 1.4rem;
    font-weight: 600;
  }

  .button_styled {
    padding: 0.5rem 1rem;
    border: 1px solid #fff;
    border-radius: 0.5rem;
  }

  &.scroll_effect {
    background: linear-gradient(
      100.87deg,
      rgba(42, 4, 79, 0.9) -16.61%,
      rgba(6, 1, 57, 0.5) 58.59%
    );
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(10px);

    &:before {
      content: ' ';
      position: absolute;
      bottom: -4px;
      left: 0;
      background: #2a044f;
      width: 100vw;
      height: 4px;
    }
  }
`;
