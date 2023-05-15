import { createContext, ReactNode, useEffect, useReducer } from 'react';
import { produce } from 'immer';

interface CartContextProviderProps {
  children: ReactNode;
}

export interface ItemCarrinho {
  id: number;
  name: string;
  image: string;
  description?: string;
  price: number;
  quantity: number;
  tag?: string[] | undefined;
  totalPrice?: number;
}
export interface Order {
  bairro: string;
  cep: number;
  cidade: string;
  complemento: string;
  numero: string;
  paymentMethod: string;
  rua: string;
  uf: string;
}

interface Cart {
  listCart: ItemCarrinho[];
  order: Order;
}

interface ListaCartContext {
  listCart: ItemCarrinho[];
  order: Order;
  addNewItemCart: (data: ItemCarrinho) => void;
  deleteItem: (data: ItemCarrinho) => void;
  updateQuantity: (data: ItemCarrinho) => void;
  totalPrice: (data: ItemCarrinho) => void;
  orderConfirmation: (data: Order) => void;
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
      if (action.type === 'UPDATE_ITEM_QUANTITY_NEWITEM') {
        const currentItem = state.listCart.findIndex(
          (item) => item.id === action.payload.verifyId.id,
        );
        return produce(state, (draft) => {
          draft.listCart[currentItem].quantity =
            action.payload.newItem.quantity;
        });
      }

      if (action.type === 'UPDATE_ITEM') {
        const currentItem = state.listCart.findIndex(
          (item) => item.id === action.payload.CoffeItem.id,
        );
        return produce(state, (draft) => {
          draft.listCart[currentItem].quantity =
            action.payload.CoffeItem.quantity;
        });
      }

      if (action.type === 'DELETE_ITEM') {
        return produce(state, (draft) => {
          draft.listCart = state.listCart.filter(
            (item) => item.id !== action.payload.CoffeItem.id,
          );
        });
      }

      if (action.type === 'TOTAL_PRICE_ITEM') {
        const currentItem = state.listCart.findIndex(
          (item) => item.id === action.payload.CoffeItem.id,
        );
        return produce(state, (draft) => {
          draft.listCart[currentItem].totalPrice =
            action.payload.CoffeItem.quantity * action.payload.CoffeItem.price;
        });
      }
      if (action.type === 'ORDER_COMFIRMATION') {
        return produce(state, (draft) => {
          draft.order = action.payload.newOrder;
          draft.listCart = [];
        });
      }

      return state;
    },
    {
      listCart: [],
      order: [],
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
  const { listCart, order } = listaCarrinhoState;

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
      dispach({
        type: 'UPDATE_ITEM_QUANTITY_NEWITEM',
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
  function deleteItem(data: ItemCarrinho) {
    const CoffeItem: ItemCarrinho = {
      id: data.id,
      name: data.name,
      image: data.image,
      description: data.description,
      price: data.price,
      quantity: data.quantity,
    };

    dispach({
      type: 'DELETE_ITEM',
      payload: { CoffeItem },
    });
  }

  function updateQuantity(data: ItemCarrinho) {
    const CoffeItem: ItemCarrinho = {
      id: data.id,
      name: data.name,
      image: data.image,
      description: data.description,
      price: data.price,
      quantity: data.quantity,
    };

    dispach({
      type: 'UPDATE_ITEM',
      payload: { CoffeItem },
    });
  }

  function totalPrice(data: ItemCarrinho) {
    const CoffeItem: ItemCarrinho = {
      id: data.id,
      name: data.name,
      image: data.image,
      description: data.description,
      price: data.price,
      quantity: data.quantity,
    };

    dispach({
      type: 'TOTAL_PRICE_ITEM',
      payload: { CoffeItem },
    });
  }
  function orderConfirmation(data: Order) {
    const newOrder: Order = {
      bairro: data.bairro,
      cep: data.cep,
      cidade: data.cidade,
      complemento: data.complemento,
      numero: data.numero,
      paymentMethod: data.paymentMethod,
      rua: data.rua,
      uf: data.uf,
    };
    dispach({
      type: 'ORDER_COMFIRMATION',
      payload: { newOrder },
    });
  }
  return (
    <CartContext.Provider
      value={{
        listCart,
        order,
        addNewItemCart,
        deleteItem,
        updateQuantity,
        totalPrice,
        orderConfirmation,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
