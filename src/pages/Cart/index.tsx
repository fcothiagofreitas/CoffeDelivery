import {
  Bank,
  CreditCard,
  CurrencyDollarSimple,
  MapPinLine,
  Money,
} from 'phosphor-react';
import { LayoutContainer } from '../../layouts/styles';
import {
  InputComponent,
  Card,
  CompleteInfos,
  CartCheck,
  FormContainer,
  ButtomPayment,
} from './styles';
import { useForm } from 'react-hook-form';

export function Cart() {
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
            <button type="submit">Enviar</button>
          </CartCheck>
        </CompleteInfos>
      </FormContainer>
    </LayoutContainer>
  );
}
