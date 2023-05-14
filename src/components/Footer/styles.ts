import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  gap: 1.5rem;
  a {
    text-decoration: none;
    color: ${(props) => props.theme['gray-800']};
    align-items: center;
    justify-content: center;
  }
`;
