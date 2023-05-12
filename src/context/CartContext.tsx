import { createContext, ReactNode, useEffect, useReducer } from 'react';
import { produce } from 'immer';

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

export const CartContext = createContext({} as ListaCartContext);

export function CartContextProvider({ children }: CartContextProviderProps) {
  // const [addCart, setAddCart] = useState([]);
  const [listaCarrinhoState, dispach] = useReducer(
    (state: Cart, action: any) => {
      if (action.type === 'ADD_ITEM') {
        // return {
        //   ...state,
        //   listCart: [...state.listCart, action.payload.newItem],
        // };
        return produce(state, (draft) => {
          draft.listCart.push(action.payload.newItem);
        });
      }
      if (action.type === 'UPDATE_ITEM_QUANTITY') {
        const currentItem = state.listCart.findIndex(
          (item) => item.id === action.payload.verifyId.id,
        );
        return produce(state, (draft) => {
          draft.listCart[currentItem].quantity =
            action.payload.newItem.quantity;

          // console.log(action.payload.newItem.quantity);
          console.log('01=', currentItem);
          console.log('00=', state.listCart);
        });
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

  // console.log(listaCarrinhoState);
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

    const verifyId = listCart.find((c) => c.id === data.id);
    if (verifyId) {
      // return produce(state, (draft) => {
      //   draft.verifyId.quantity.push(newItem.quantity);
      // });
      console.log('o que é o newItem.quantity=', newItem.quantity);

      dispach({
        type: 'UPDATE_ITEM_QUANTITY',
        payload: {
          verifyId,
          newItem,
        },
      });
    } else {
      dispach({
        type: 'ADD_ITEM',
        payload: { newItem },
      });
    }
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
