import styled from 'styled-components';

export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 60% 1fr;
  gap: 1rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const CompleteInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .topoInfo {
    display: flex;
    width: 100%;
    gap: 0.5rem;
    margin-bottom: 1rem;
    p {
      display: flex;
      flex-direction: column;
      gap: 2px;
      color: ${(props) => props.theme['gray-800']};
      span {
        color: ${(props) => props.theme['gray-700']};
        font-size: 0.875rem;
      }
    }
    .yellow {
      color: ${(props) => props.theme['yellow-900']};
    }
    .purple {
      color: ${(props) => props.theme['purple-500']};
    }
  }
  .inputsStyle {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    .rua {
      width: 100%;
    }
    .complemento {
      width: 60%;
    }
    .uf {
      width: 20%;
    }
    .numero,
    .bairro,
    .cidade {
      flex: 1;
    }
  }
  .selected {
    background: ${(props) => props.theme['purple-400']};
    border: 1px solid ${(props) => props.theme['purple-500']};
    &:hover {
      background: ${(props) => props.theme['purple-400']};
      border: 1px solid ${(props) => props.theme['purple-900']};
    }
  }
  .selectTypePayment {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const CartCheck = styled.div`
  border-radius: 6px 44px;
  background: ${(props) => props.theme['gray-300']};
  padding: 2.5rem;
`;

export const InputComponent = styled.input`
  display: flex;
  align-items: center;
  padding: 12px;
  background: ${(props) => props.theme['gray-400']};
  gap: 4px;
  border: 1px solid ${(props) => props.theme['gray-500']};
  border-radius: 4px;

  height: 42px;
  &:focus,
  &:focus-visible {
    box-shadow: 0 0 0 1px ${(props) => props.theme['yellow-900']};
    outline: none;
  }
`;

export const Card = styled.div`
  background: ${(props) => props.theme['gray-300']};
  border-radius: 6px;
  padding: 2.5rem;
`;

export const ButtomPayment = styled.button`
  border-radius: 6px;
  padding: 1rem;
  background: ${(props) => props.theme['gray-400']};
  text-transform: uppercase;
  color: ${(props) => props.theme['gray-700']};
  font-size: 0.75rem;
  border: none;
  cursor: pointer;
  display: flex;
  gap: 0.75rem;
  border: 1px solid transparent;

  flex: 1;
  text-align: start;

  &:hocus {
    outline: none;
  }
  &:hover {
    color: ${(props) => props.theme['gray-800']};
    background: ${(props) => props.theme['gray-500']};
  }

  svg {
    color: ${(props) => props.theme['purple-500']};
  }
`;
