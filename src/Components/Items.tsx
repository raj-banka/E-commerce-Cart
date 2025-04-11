import { useContext } from 'react'
import Cart from './Cart';
import { CartContext } from '../Context/CartContext';

export default function Items(props ) {
    const context = useContext(CartContext);

    return (
        <div>
           <h3>{props.name}</h3>
           <h4>Price : {props.price}</h4>
           <button onClick={()=>(
            context.setItems([...context.items , {name : props.name , price : props.price}])
    )}>Add to cart</button>
           {/* <Items totAmt={total} /> */}
        </div>
    )
}