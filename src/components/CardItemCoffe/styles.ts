import styled from 'styled-components';

export const CardCoffe = styled.div`
  padding: 0 1.25rem 1.25rem 1.25rem;
  background: ${(props) => props.theme['gray-300']};
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1.25rem;
  gap: 1rem;

  .content {
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-bottom: 2rem;
  }
  .tags {
    display: flex;
    gap: 0.1rem;
    justify-content: space-between;

    .tag {
      text-transform: uppercase;
      font-size: 0.625rem;
      font-weight: 700;
      color: ${(props) => props.theme['yellow-900']};
      background: ${(props) => props.theme['yellow-400']};
      padding: 4px 8px;
      border-radius: 100px;
    }
  }

  p {
    color: ${(props) => props.theme['gray-700']};
    font-size: 0.875rem;
  }
  button {
    background: transparent;
    border: none;
    cursor: pointer;
  }

  .bottom,
  .quanti,
  .buy {
    display: flex;
  }
  .buy {
    gap: 0.75rem;
  }
  .bottom {
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin-top: auto;
  }
  .preco {
    font-size: 1.5rem;
    font-weight: 700;
    &::before {
      content: 'R$';
      font-size: 0.75rem;
      font-weight: 400;
    }
  }

  .addCart {
    background: ${(props) => props.theme['purple-900']};
    color: ${(props) => props.theme['white']};
    padding: 8px;
    border-radius: 6px;
    line-height: 0;
  }
  img {
    margin-top: -25px;
  }
`;
