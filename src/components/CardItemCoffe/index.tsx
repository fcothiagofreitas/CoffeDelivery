import { useState, useContext } from 'react';
import { QuantiControler } from '../QuantiControler';
import { CardCoffe } from './styles';
import { ShoppingCartSimple } from 'phosphor-react';
import { CartContext } from '../../contexts/CartContext';

export interface PropsCardCoffe {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
  tag?: string[] | undefined;
  addItem: number;
}

export function CardItemCoffe({
  id,
  tag,
  name,
  image,
  description,
  price,
}: PropsCardCoffe) {
  const { addCart, setAddCart, handleAddCart } = useContext(CartContext);
  const [addItem, setAddIten] = useState(1);

  function handleAddAmountIten() {
    setAddIten((state) => state + 1);
  }
  function handleRemeveAmountIten() {
    if (addItem > 0) {
      setAddIten((state) => state - 1);
    }
  }
  // function handleAddCart() {
  //   const newItem: PropsCardCoffe = {
  //     id,
  //     name,
  //     addItem,
  //     image,
  //     price,
  //   };
  //   const verifyId = addCart.find((item) => item.id === newItem.id);
  //   if (verifyId === undefined) {
  //     setAddCart((state) => [...state, newItem]);
  //   } else {
  //     setAddCart((state) =>
  //       state.map((item) => {
  //         if (item.id === newItem.id) {
  //           return { ...item, addItem: addItem };
  //         } else {
  //           return item;
  //         }
  //       }),
  //     );
  //   }

  //   // setAddCart((state) => [...state, newItem]);
  // }
  //console.log(addCart);

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
            value={addItem}
            onAdd={handleAddAmountIten}
            onSubtract={handleRemeveAmountIten}
          />
          <button className="addCart" onClick={handleAddCart}>
            <ShoppingCartSimple weight="fill" size={22} />
          </button>
        </div>
      </div>
    </CardCoffe>
  );
}

export function ControllerQuantityItemCart() {
  return console.log(addItem);
}
