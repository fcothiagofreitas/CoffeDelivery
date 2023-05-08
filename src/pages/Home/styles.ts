import styled from 'styled-components';
import bg from '../../assets/Background.png';

export const BannerContainer = styled.div`
  background: url(${bg}) no-repeat center center;
  background-size: 100% 100%;

  .destaque {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 2.5rem 0;
    h1 {
      font-size: 3rem;
      line-height: 130%;
    }
    p {
      font-size: 1.25rem;
      color: ${(props) => props.theme['gray-800']};
    }
    .content {
      max-width: 588px;
    }
    img {
      max-width: 100%;
    }

    .listaInfos {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-top: 4.125rem;
    }
  }
  @media (max-width: 54rem) {
    .destaque {
      flex-direction: column;
    }
  }
`;

export type VariantColorsType = 'yellow' | 'gray' | 'yellowLight' | 'purple';

interface VariantColorsProps {
  variant: VariantColorsType;
}

export const variantColors = {
  yellow: 'yellow-900',
  gray: 'gray-700',
  yellowLight: 'yellow-500',
  purple: 'purple-500',
};

export const ListaInfos = styled.li<VariantColorsProps>`
  color: ${(props) => props.theme['gray-700']};
  display: flex;
  gap: 0.75rem;
  align-items: center;
  justify-content: start;
  margin-bottom: 1.25rem;
  span {
    display: flex;
    width: 32px;
    height: 32px;
    padding: 8px;
    border-radius: 100%;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    background: ${(props) => props.theme[variantColors[props.variant]]};
  }
  svg {
    color: ${(props) => props.theme['white']};
  }
`;
export const ListCoffes = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  @media (min-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
