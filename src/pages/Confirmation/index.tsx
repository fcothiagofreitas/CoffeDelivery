import { LayoutContainer } from '../../layouts/styles';
import deliveryImg from '../../assets/delivery.svg';
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import { ConfirmationSend } from './styles';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export function Confirmation() {
  const { order } = useContext(CartContext);
  return (
    // Define the object type like below when you don't know ALL property names

    <LayoutContainer style={{ paddingTop: '2rem' }}>
      <ConfirmationSend>
        <div className="infosPedido">
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
          <div className="details">
            <div className="address">
              <span className="purple">
                <MapPin weight="fill" />
              </span>
              <p>
                Entrega em
                <strong>
                  {' '}
                  {order.rua}, {order.numero}
                </strong>
                {order.bairro} - {order.cidade}, {order.uf}
              </p>
            </div>
            <div className="previewTime">
              <span className="yellow">
                <Timer weight="fill" />
              </span>
              <p>
                Previsão de entrega <b>20 min - 30 min </b>
              </p>
            </div>
            <div className="payment">
              <span className="yellowDark">
                <CurrencyDollar />
              </span>
              <p>
                Pagamento na entrega <b>{order.paymentMethod}</b>
              </p>
            </div>
          </div>
        </div>
        <img src={deliveryImg} />
      </ConfirmationSend>
    </LayoutContainer>
  );
}
