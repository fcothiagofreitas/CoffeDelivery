import styled from 'styled-components';

interface HeaderContainerProps {
  shadow?: boolean;
}

const colorShadow = '0px 0.2em 0.2em 0em rgba(0, 0, 0, 0.1)';

export const HeaderContainer = styled.header<HeaderContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  position: fixed;
  width: 100%;
  top: 0px;
  box-shadow: ${(props) => props.shadow && colorShadow};
  transition: all 0.2s ease-in-out;
  backdrop-filter: blur(10px);
  background: rgba(250, 250, 250, 0.7);
  .topoFixed {
    justify-content: space-between;
    width: 100%;
    flex-direction: row;
  }
  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
  }
  a {
    padding: 8px;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 6px;
    text-decoration: none;
    font-size: 0.875rem;
  }
  .logo {
    padding: 0;
  }
  .locale {
    gap: 0.25rem;
    background: ${(props) => props.theme['purple-400']};
  }
  .cart {
    color: ${(props) => props.theme['yellow-900']};
    background: ${(props) => props.theme['yellow-400']};
    transition: all 0.1s ease-in;
    position: relative;
    &:hover {
      color: ${(props) => props.theme.white};
      background: ${(props) => props.theme['yellow-500']};
    }
    &::before {
      content: '';
      position: absolute;
      height: 20px;
      width: 20px;
      color: ${(props) => props.theme.white};
      background: ${(props) => props.theme['yellow-500']};
      top: -8px;
      border-radius: 100%;
      left: 25px;
    }
  }
`;
