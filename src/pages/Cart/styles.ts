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

  .campoItem {
    width: 100%;
    input + p {
      margin-top: 0.2rem;
      font-size: 0.75rem;
      color: ${(props) => props.theme['purple-900']};
      overflow-wrap: break-word;
    }
  }
  .error {
    margin-top: 0.2rem;
    font-size: 0.75rem;
    color: ${(props) => props.theme['purple-900']};
    inline-size: 150px;
    overflow-wrap: break-word;
  }
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
  .maisInforEndereco {
    input + input {
      margin-top: 1rem;
    }
  }
  .inputsStyle {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    width: 100%;
  }
  .selected {
    background: ${(props) => props.theme['purple-400']};
    border: 1px solid ${(props) => props.theme['purple-500']};
    &:hover {
      background: ${(props) => props.theme['purple-400']};
      border: 1px solid ${(props) => props.theme['purple-900']};
    }
    &:focus {
      box-shadow: none;
    }
  }
  .selectTypePayment {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    button {
      width: 100%;
      justify-content: flex-start;
    }
  }

  .resume {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0;
    .resumeItem {
      display: flex;
      justify-content: space-between;
    }
  }
  button[type='submit'] {
    background: ${(props) => props.theme['yellow-500']};
  }
  @media (min-width: 768px) {
    .selectTypePayment {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      button {
        justify-content: flex-start;
      }
    }

    .cep {
      width: 15rem;
    }
    .numero {
      flex: 2;
    }
    .complemento {
      flex: 1;
    }

    .bairro,
    .cidade {
      width: 40%;
    }
    .uf {
      flex: 1;
    }
    .maisInforEndereco {
      display: flex;
      gap: 1rem;
      input + input {
        margin: 0;
      }
    }
  }
`;

export const CartCheck = styled.div`
  border-radius: 6px 44px;
  background: ${(props) => props.theme['gray-300']};
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
`;

export const InputComponent = styled.input`
  display: flex;
  padding: 12px;
  background: ${(props) => props.theme['gray-400']};
  border: 1px solid ${(props) => props.theme['gray-500']};
  border-radius: 4px;
  height: 42px;
  width: 100%;
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
  font-size: 0.75rem;
  color: ${(props) => props.theme['gray-700']};
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
