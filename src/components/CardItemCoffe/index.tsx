import { CardCoffe } from './styles';
import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react';

interface PropsCardCoffe {
  name: string;
  image: string;
  description: string;
  price: string;
  tag?: string[] | undefined;
}

export function CardItemCoffe({
  tag,
  name,
  image,
  description,
  price,
}: PropsCardCoffe) {
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
          <div className="quanti">
            <button>
              <Minus size={14} weight="bold" />
            </button>
            <p>1</p>
            <button>
              <Plus size={14} weight="bold" />
            </button>
          </div>
          <button className="addCart">
            <ShoppingCartSimple weight="fill" size={22} />
          </button>
        </div>
      </div>
    </CardCoffe>
  );
}
