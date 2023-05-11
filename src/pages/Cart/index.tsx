import {
  Bank,
  CreditCard,
  CurrencyDollarSimple,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react';
import { LayoutContainer } from '../../layouts/styles';
import {
  InputComponent,
  Card,
  CompleteInfos,
  CartCheck,
  FormContainer,
  ButtomPayment,
  ItemSelected,
} from './styles';
import { useForm } from 'react-hook-form';
import { QuantiControler } from '../../components/QuantiControler';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export function Cart() {
  const { listCart } = useContext(CartContext);

  const { register, handleSubmit } = useForm();

  function handleSubmitSendCart(data: any) {
    console.log(data);
  }

  return (
    <LayoutContainer style={{ paddingTop: '2rem' }}>
      <FormContainer onSubmit={handleSubmit(handleSubmitSendCart)}>
        <CompleteInfos>
          <h3>Complete seu pedido</h3>
          <Card className="inputsStyle">
            <div className="topoInfo">
              <MapPinLine size={22} className="yellow" />
              <p>
                Endereço de entrega
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </p>
            </div>
            <InputComponent
              placeholder="CEP"
              className="cep"
              {...register('cep', { valueAsNumber: true })}
            />
            <InputComponent
              className="rua"
              placeholder="Rua"
              {...register('rua')}
            />
            <InputComponent
              placeholder="Número"
              className="numero"
              {...register('numero', { valueAsNumber: true })}
            />
            <InputComponent
              placeholder="Complemento"
              className="complemento"
              {...register('complemento')}
            />
            <InputComponent
              className="bairro"
              placeholder="Bairro"
              {...register('bairro')}
            />
            <InputComponent
              className="cidade"
              placeholder="Cidade"
              {...register('cidade')}
            />
            <InputComponent
              className="uf"
              placeholder="UF"
              {...register('uf')}
            />
          </Card>
          <Card>
            <div className="topoInfo">
              <CurrencyDollarSimple size={22} className="purple" />
              <p>
                Pagamento
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </p>
            </div>
            <div className="selectTypePayment">
              <ButtomPayment className="selected">
                <CreditCard size={16} /> Cartão de crédito
              </ButtomPayment>
              <ButtomPayment>
                <Bank size={16} /> Cartão de débito
              </ButtomPayment>
              <ButtomPayment>
                <Money size={16} /> dinheiro
              </ButtomPayment>
            </div>
          </Card>
        </CompleteInfos>

        <CompleteInfos>
          <h3>Cafés selecionados</h3>
          <CartCheck>
            {listCart.map(({ id, image, name, price, quantity }) => (
              <ItemSelected key={id}>
                <img src={image} alt="" />
                <div className="content">
                  <div className="infos">
                    <p>{name}</p>
                    <div className="preco">R$ {price}</div>
                  </div>
                  <div className="actions">
                    <QuantiControler value={quantity} />
                    <button className="remover">
                      <Trash /> Remover
                    </button>
                  </div>
                </div>
              </ItemSelected>
            ))}

            <div className="resume">
              <div className="resumeItem">
                <p>Toral de itens</p>
                <p>R$ 29,30</p>
              </div>
              <div className="resumeItem">
                <p>Entrega</p>
                <p>R$ 9,30</p>
              </div>
              <div className="resumeItem">
                <p>Toral </p>
                <p>R$ 38,60</p>
              </div>
            </div>
            <button type="submit">Confirmar Pedido</button>
          </CartCheck>
        </CompleteInfos>
      </FormContainer>
    </LayoutContainer>
  );
}
