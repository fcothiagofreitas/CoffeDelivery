import { Trash } from 'phosphor-react';
import { QuantiControler } from '../QuantiControler';
import { ItemSelected } from './styles';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';

interface ListaItemCarrinho {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
  totalPriceItem: number | undefined;
}

export function CardItemCoffeCart({
  id,
  image,
  name,
  price,
  quantity,
  totalPriceItem,
}: ListaItemCarrinho) {
  const quant = Number(quantity);

  const { deleteItem, updateQuantity, totalPrice } = useContext(CartContext);
  const [quantityItem, setQuantityItem] = useState(quant);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const item = {
    id: id,
    name: name,
    image: image,
    price: price,
    quantity: quantityItem,
    totalPriceItem: totalPriceItem,
  };

  useEffect(() => {
    updateQuantity(item);
    totalPrice(item);
  }, [item, updateQuantity, totalPrice]);

  function handleAddQuantity() {
    setQuantityItem((state) => state + 1);
  }
  function handleSubstractQuantity() {
    if (quantityItem > 1) {
      setQuantityItem((state) => state - 1);
    } else {
      deleteItem(item);
    }
  }

  function handleDeleteItem() {
    deleteItem(item);
  }

  return (
    <ItemSelected key={id}>
      <img src={image} alt="" />
      <div className="content">
        <div className="infos">
          <p>{name}</p>
          <div className="preco">R$ {totalPriceItem?.toFixed(2)}</div>
        </div>
        <div className="actions">
          <QuantiControler
            value={quantityItem}
            type="button"
            onAdd={handleAddQuantity}
            onRemove={handleSubstractQuantity}
          />
          <button className="remover" onClick={handleDeleteItem}>
            <Trash /> Remover
          </button>
        </div>
      </div>
    </ItemSelected>
  );
}
