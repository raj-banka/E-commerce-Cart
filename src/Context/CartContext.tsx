import {createContext , useState} from "react";

type Item = {
    name : string,
    price : number
}
interface CartContextType{
    items : Item[],
    setItems: React.Dispatch<React.SetStateAction<Item[]>>;  
}
type CartContextProviderProps = {
    children : React.ReactNode;
}
const CartContext = createContext<CartContextType>({} as CartContextType);

const CartContextProvider = (props:CartContextProviderProps)=>{
    const [items , setItems] = useState<Item[]>([]);
    return(
          <CartContext.Provider value ={{items , setItems}}>
            {props.children}
            </CartContext.Provider>
    );
}

export {CartContext,CartContextProvider}