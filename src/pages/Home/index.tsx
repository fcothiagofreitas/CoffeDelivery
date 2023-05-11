import { LayoutContainer } from '../../layouts/styles';
import { BannerContainer, ListaInfos, ListCoffes } from './styles';
import coffeImage from '../../assets/cofee.png';
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import { CardItemCoffe } from '../../components/CardItemCoffe';
import { dataCoffe } from '../../content';

// console.log(dataTag);

export function Home() {
  return (
    <>
      <BannerContainer>
        <LayoutContainer>
          <div className="destaque">
            <div className="content">
              <div className="infos">
                <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                <p>
                  Com o Coffee Delivery você recebe seu café onde estiver, a
                  qualquer hora
                </p>
              </div>
              <ul className="listaInfos">
                <ListaInfos variant="yellow">
                  <span>
                    <ShoppingCart size={16} weight="fill" />
                  </span>
                  Compra simples e segura
                </ListaInfos>
                <ListaInfos variant="gray">
                  <span>
                    <Package weight="fill" size={16} />
                  </span>
                  Embalagem mantém o café intacto
                </ListaInfos>
                <ListaInfos variant="yellowLight">
                  <span>
                    <Timer weight="fill" size={16} />
                  </span>
                  Entrega rápida e rastreada
                </ListaInfos>
                <ListaInfos variant="purple">
                  <span>
                    <Coffee weight="fill" size={16} />
                  </span>
                  O café chega fresquinho até você
                </ListaInfos>
              </ul>
            </div>
            <img
              src={coffeImage}
              alt="Copo termico de café com grãos de café ao redor"
            />
          </div>
        </LayoutContainer>
      </BannerContainer>
      <LayoutContainer>
        <h1 style={{ marginBottom: '2rem' }}>Nossos cafés</h1>
        <ListCoffes>
          {dataCoffe.map((coffe) => (
            <CardItemCoffe
              key={coffe.id}
              id={coffe.id}
              tag={coffe.tag}
              name={coffe.name}
              image={coffe.image}
              description={coffe.description}
              price={coffe.price}
            />
          ))}
        </ListCoffes>
      </LayoutContainer>
    </>
  );
}
