import { LayoutContainer } from '../../layouts/styles';
import deliveryImg from '../../assets/delivery.svg';
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import { ConfirmationSend } from './styles';

export function Confirmation() {
  return (
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
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>{' '}
                Farrapos - Porto Alegre, RS
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
                Pagamento na entrega <b>Cartão de Crédito</b>
              </p>
            </div>
          </div>
        </div>
        <img src={deliveryImg} />
      </ConfirmationSend>
    </LayoutContainer>
  );
}
