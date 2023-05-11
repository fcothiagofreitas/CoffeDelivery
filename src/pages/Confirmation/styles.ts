import styled from 'styled-components';

export const ConfirmationSend = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  gap: 4rem;
  h1 {
    color: ${(props) => props.theme['yellow-900']};
  }
  h1 + p {
    font-size: 1.25rem;
    margin-bottom: 4rem;
  }

  .details {
    display: flex;
    border: 1px solid;
    flex-direction: column;
    padding: 2.5rem;
    max-width: 32rem;
    background: linear-gradient(
          ${(props) => props.theme['gray-100']},
          ${(props) => props.theme['gray-100']}
        )
        padding-box,
      linear-gradient(to right, #dbac2c, #8047f8) border-box;
    border-radius: 6px 36px;
    border: 1px solid transparent;
    gap: 1.5rem;
  }

  .details > div {
    display: grid;
    grid-template-columns: 32px 1fr;
    gap: 0.5rem;
    .yellow {
      background-color: ${(props) => props.theme['yellow-500']};
    }
    .purple {
      background-color: ${(props) => props.theme['purple-500']};
    }
    .yellowDark {
      background-color: ${(props) => props.theme['yellow-900']};
    }
  }
  .details > div > p > b {
    display: block;
  }
  .details > div > span {
    width: 32px;
    height: 32px;
    border-radius: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    color: ${(props) => props.theme.white};
  }
`;
