import {  useContext} from "react";
import { CartContext } from "../Context/CartContext";

export default function Cart() {
    const cart = useContext(CartContext);
    const total : number = cart.items.reduce((total , item)=>total + item.price , 0);

    return(<>
        <h1>Cart</h1>
        {cart && cart.items .map((item)=>(<li key={Math.random()}> {item.name}- {item.price}</li>))}
         <h2>Total : {total}</h2>
        </>
    )
}

