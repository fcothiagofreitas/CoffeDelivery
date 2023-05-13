import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
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
import { CardItemCoffeCart } from '../../components/CardItemCoffeCart';

export function Cart() {
  const { listCart } = useContext(CartContext);

  const { register, handleSubmit, setValue, setFocus } = useForm();

  const [selected, setSelected] = useState();
  function onChangeValue(e) {
    if (e.target.value !== selected) {
      setSelected(e.target.value);
    }
  }
  function handleSubmitSendCart(data: any) {
    console.log(data);
  }
  function checkCEP(e) {
    const cep = e.target.value.replace(/\D/g, '');
    setValue('cep', cep);

    fetch(`https://viacep.com.br/ws/${cep}/json`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setValue('rua', data.logradouro);
        setValue('bairro', data.bairro);
        setValue('cidade', data.localidade);
        setValue('uf', data.uf);
        setFocus('numero');
      });
  }

  const freteFixed = 9.23;
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
              onBlur={checkCEP}
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
            <div className="selectTypePayment" onClick={onChangeValue}>
              <ButtomPayment type="button" value="Crédito">
                <CreditCard size={16} /> Cartão de crédito
              </ButtomPayment>
              <ButtomPayment type="button" value="Débito">
                <Bank size={16} /> Cartão de débito
              </ButtomPayment>
              <ButtomPayment type="button" value="Dinheiro">
                <Money size={16} /> dinheiro
              </ButtomPayment>
            </div>
          </Card>
        </CompleteInfos>

        <CompleteInfos>
          <h3>Cafés selecionados</h3>
          <CartCheck>
            {listCart.map((item) => (
              <CardItemCoffeCart
                key={item.id}
                id={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                totalPriceItem={item.totalPrice}
              />
            ))}

            <div className="resume">
              <div className="resumeItem">
                <p>Total de itens</p>
              </div>
              <div className="resumeItem">
                <p>Entrega</p>
                <p>R$ {freteFixed}</p>
              </div>
              <div className="resumeItem">
                <p>Total </p>
              </div>
            </div>
            <button type="submit">Confirmar Pedido</button>
          </CartCheck>
        </CompleteInfos>
      </FormContainer>
    </LayoutContainer>
  );
}
