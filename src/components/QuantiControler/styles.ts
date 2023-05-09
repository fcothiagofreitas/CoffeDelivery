import styled from 'styled-components';

export const ControlerQuanti = styled.div`
  align-items: center;
  background: ${(props) => props.theme['gray-500']};
  border-radius: 6px;
  gap: 0.25rem;
  display: flex;

  button {
    cursor: pointer;
    padding: 8px;
    line-height: 0;
    background: transparent;
    border: none;
    color: ${(props) => props.theme['purple-500']};
    &:hover {
      color: ${(props) => props.theme['purple-900']};
    }
  }
`;
