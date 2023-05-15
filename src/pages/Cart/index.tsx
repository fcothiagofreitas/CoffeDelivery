import { useContext, useEffect, useState } from 'react';
import { CartContext, Order } from '../../context/CartContext';
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
import { useNavigate } from 'react-router-dom';

export function Cart() {
  const { listCart, orderConfirmation, order } = useContext(CartContext);

  const {
    register,
    handleSubmit,
    setValue,
    setFocus,
    formState: { errors },
  } = useForm<Order>();

  const [selected, setSelected] = useState('');
  const [errorPaymentMethod, setErrorPaymentMethod] = useState(false);

  function onChangeValue(e: any) {
    if (e.target.value !== selected) {
      setSelected(e.target.value);
    } else {
      setSelected('');
    }
  }

  const navigate = useNavigate();
  function handleSubmitSendCart(data: any) {
    if (selected === '') {
      setErrorPaymentMethod(!errorPaymentMethod);
    } else {
      orderConfirmation(data);
      navigate('/confirmation');
    }
  }
  const [errorForm, setErrorForm] = useState(false);
  useEffect(() => {
    if (order) {
      setValue('cep', order.cep);
      setValue('rua', order.rua);
      setValue('bairro', order.bairro);
      setValue('cidade', order.cidade);
      setValue('uf', order.uf);
      setValue('numero', order.numero);
    }
  }, []);

  function checkCEP(e: any) {
    const cep = e.target.value.replace(/\D/g, '');
    setValue('cep', cep);

    fetch(`https://viacep.com.br/ws/${cep}/json`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.erro) {
          setErrorForm(!errorForm);
        }
        setValue('rua', data.logradouro);
        setValue('bairro', data.bairro);
        setValue('cidade', data.localidade);
        setValue('uf', data.uf);
        setFocus('numero');
      });
  }

  const freteFixed = 9.23;

  const totalItensValue = listCart.reduce((a, b) => a + b.totalPrice!, 0);

  const totalOrder = totalItensValue + freteFixed;

  useEffect(() => {
    setValue('paymentMethod', selected);
  }, [selected, setValue]);

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
            <div className="campoItem">
              <InputComponent
                placeholder="CEP"
                className="cep"
                type="number"
                {...register('cep', { valueAsNumber: true, required: true })}
                onBlur={checkCEP}
              />
              {errorForm === true && <p>CEP não encontrado</p>}
              {errors.cep && <p>CEP é obrigatório</p>}
            </div>
            <div className="campoItem rua">
              <InputComponent
                className="rua"
                placeholder="Rua"
                {...register('rua', { required: true })}
              />
              {errors.rua && <p>Rua é obrigatório</p>}
            </div>
            <div className="campoItem numero">
              <InputComponent
                placeholder="Número"
                className="numero"
                {...register('numero', { required: true })}
              />
              {errors.cep && (
                <p>Número é obrigatório, caso nao tenha deixe como S/N</p>
              )}
            </div>
            <InputComponent
              placeholder="Complemento"
              className="complemento"
              {...register('complemento')}
            />
            <div className="campoItem maisInforEndereco">
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
            </div>
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
              <ButtomPayment
                type="button"
                value="Crédito"
                className={selected === 'Crédito' ? 'selected' : ''}
              >
                <CreditCard size={16} /> Cartão de crédito
              </ButtomPayment>
              <ButtomPayment
                type="button"
                value="Débito"
                className={selected === 'Débito' ? 'selected' : ''}
              >
                <Bank size={16} /> Cartão de débito
              </ButtomPayment>
              <ButtomPayment
                type="button"
                value="Dinheiro"
                className={selected === 'Dinheiro' ? 'selected' : ''}
              >
                <Money size={16} /> dinheiro
              </ButtomPayment>
              <input
                type="text"
                style={{ display: 'none' }}
                {...register('paymentMethod')}
              />
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
                <p>R$ {totalItensValue.toFixed(2)}</p>
              </div>
              <div className="resumeItem">
                <p>Entrega</p>
                <p>R$ {freteFixed}</p>
              </div>
              <div className="resumeItem">
                <p>Total </p>
                <p>R$ {totalOrder.toFixed(2)}</p>
              </div>
            </div>
            <button type="submit">Confirmar Pedido</button>
            {errorPaymentMethod ? (
              <p className="error">Selecione uma forma de pagamento</p>
            ) : (
              ''
            )}
          </CartCheck>
        </CompleteInfos>
      </FormContainer>
    </LayoutContainer>
  );
}
