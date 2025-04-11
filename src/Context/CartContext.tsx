import {createContext , useState} from "react";

interface CartContextType{
    items : number,
    setItems: React.Dispatch<React.SetStateAction<number>>;  
}
type CartContextProviderProps = {
    children : React.ReactNode;
}
const CartContext = createContext<CartContextType>({} as CartContextType);

const CartContextProvider = (props:CartContextProviderProps)=>{
    const [items , setItems] = useState([]);
    return(
          <CartContext.Provider value ={{items , setItems}}>
            {props.children}
            </CartContext.Provider>
    );
}

export {CartContext,CartContextProvider}