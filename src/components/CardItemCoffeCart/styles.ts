import styled from 'styled-components';

export const ItemSelected = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme['gray-400']};
  padding-bottom: 1.5rem;
  margin-top: 1.5rem;
  gap: 0.75rem;
  &:first-child {
    margin-top: 0;
  }
  .actions {
    display: flex;
    gap: 0.5rem;
  }
  .content {
    flex-direction: column;
    display: flex;
    gap: 0.5rem;
    justify-content: space-between;
    flex: 1;
  }
  .infos {
    display: flex;
    justify-content: space-between;
    flex: 1;
    gap: 0.5rem;
  }
  img {
    width: auto;
    max-height: 64px;
  }
  .preco {
    font-weight: 700;
  }
  .remover {
    cursor: pointer;
    background: transparent;
    gap: 0.5rem;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0.75rem;
    border-radius: 6px;
    text-transform: uppercase;
    font-size: 0.75rem;
    background: ${(props) => props.theme['gray-500']};
    &:hocus {
      outline: none;
    }
    &:hover {
      color: ${(props) => props.theme['gray-800']};
      svg {
        color: ${(props) => props.theme['purple-900']};
      }
    }
    svg {
      color: ${(props) => props.theme['purple-500']};
      width: 18px;
      height: 18px;
    }
  }
`;
