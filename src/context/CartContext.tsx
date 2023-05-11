import { createContext, ReactNode, useEffect, useReducer } from 'react';

interface CartContextProviderProps {
  children: ReactNode;
}

interface ItemCarrinho {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
  quantity: number;
  tag?: string[] | undefined;
}

interface Cart {
  listCart: ItemCarrinho[];
}

interface ListaCartContext {
  listCart: ItemCarrinho[];
  addNewItemCart: (data: ItemCarrinho) => void;
}

// interface CartContextType {
//   addCart: number;
//   setAddCart: () => void;
// }

export const CartContext = createContext({} as ListaCartContext);

export function CartContextProvider({ children }: CartContextProviderProps) {
  // const [addCart, setAddCart] = useState([]);
  const [listaCarrinhoState, dispach] = useReducer(
    (state: Cart, action: any) => {
      if (action.type === 'ADD_ITEM') {
        return {
          ...state,
          listCart: [...state.listCart, action.payload.newItem],
        };
      }
      return state;
    },
    {
      listCart: [],
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffe-delivery:cart-list-1.0.0',
      );
      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }
      return initialState;
    },
  );

  useEffect(() => {
    const stateJSON = JSON.stringify(listaCarrinhoState);
    localStorage.setItem('@coffe-delivery:cart-list-1.0.0', stateJSON);
  }, [listaCarrinhoState]);

  console.log(listaCarrinhoState);
  const { listCart } = listaCarrinhoState;

  // const {};
  function addNewItemCart(data: ItemCarrinho) {
    const newItem: ItemCarrinho = {
      id: data.id,
      name: data.name,
      image: data.image,
      description: data.description,
      price: data.price,
      quantity: data.quantity,
    };
    dispach({
      type: 'ADD_ITEM',
      payload: { newItem },
    });
  }

  return (
    <CartContext.Provider
      value={{
        listCart,
        addNewItemCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
