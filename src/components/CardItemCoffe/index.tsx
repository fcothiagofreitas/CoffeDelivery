import { useContext, useState } from 'react';
import { QuantiControler } from '../QuantiControler';
import { CardCoffe } from './styles';
import { ShoppingCartSimple } from 'phosphor-react';
import { CartContext } from '../../context/CartContext';

interface PropsCardCoffe {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
  tag?: string[] | undefined;
}

export function CardItemCoffe({
  id,
  tag,
  name,
  image,
  description,
  price,
}: PropsCardCoffe) {
  const { addNewItemCart } = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);

  function handleAddQuantity() {
    setQuantity((state) => state + 1);
  }
  function handleSubstractQuantity() {
    if (quantity > 0) {
      setQuantity((state) => state - 1);
    }
  }

  const item = {
    id: id,
    name: name,
    image: image,
    description: description,
    price: price,
    quantity: quantity,
  };
  function handleAddItemCart() {
    addNewItemCart(item);
  }

  return (
    <CardCoffe>
      <img src={image} alt="" />
      <div className="tags">
        {tag?.map((item) => (
          <span className="tag" key={item}>
            {item}
          </span>
        ))}
      </div>
      <div className="content">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      <div className="bottom">
        <div className="preco">{price}</div>
        <div className="buy">
          <QuantiControler
            value={quantity}
            type="button"
            onAdd={handleAddQuantity}
            onRemove={handleSubstractQuantity}
          />
          <button className="addCart" type="button" onClick={handleAddItemCart}>
            <ShoppingCartSimple weight="fill" size={22} />
          </button>
        </div>
      </div>
    </CardCoffe>
  );
}
