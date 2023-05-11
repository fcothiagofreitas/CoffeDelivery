import { createContext, ReactNode, useEffect, useReducer } from 'react';

interface CartContextProviderProps {
  children: ReactNode;
}
interface ListaCarrinho {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
  tag?: string[] | undefined;
  addItem: number;
}

// interface CartContextType {
//   addCart: number;
//   setAddCart: () => void;
// }

export const CartContext = createContext();

export function CartContextProvider({ children }: CartContextProviderProps) {
  // const [addCart, setAddCart] = useState([]);
  const [listaCarrinho, dispach] = useReducer(
    (state: ListaCarrinho[], action: any) => {
      return state;
    },
    [],
  );

  // const [addItem, setAddIten] = useState(1);

  // function handleAddAmountIten() {
  //   setAddIten((state) => state + 1);
  // }
  // function handleRemeveAmountIten() {
  //   if (addItem > 0) {
  //     setAddIten((state) => state - 1);
  //   }
  // }
  function handleAddCart() {
    const newItem: ListaCarrinho = {
      id,
      name,
      addItem,
      image,
      price,
    };
    const verifyId = addCart.find((item) => item.id === newItem.id);
    if (verifyId === undefined) {
      setAddCart((state) => [...state, newItem]);
    } else {
      setAddCart((state) =>
        state.map((item) => {
          if (item.id === newItem.id) {
            return { ...item, addItem: addItem };
          } else {
            return item;
          }
        }),
      );
    }

    // setAddCart((state) => [...state, newItem]);
  }
  function initialState() {
    const storedStateJSON = localStorage.getItem(
      '@coffe-delivery:cartstate-1.0.0',
    );
    if (storedStateJSON) {
      // console.log(storedStateJSON);
      return JSON.parse(storedStateJSON);
    }
    return [];
  }

  useEffect(() => {
    const cartJSON = JSON.stringify(listaCarrinho);

    localStorage.setItem('@coffe-delivery:cartstate-1.0.0', cartJSON);
    initialState();
  }, [listaCarrinho]);

  return (
    <CartContext.Provider
      value={{
        listaCarrinho,
        handleAddCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
