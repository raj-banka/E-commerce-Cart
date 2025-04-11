import { useContext } from 'react'
import { CartContext } from '../Context/CartContext';

type prop = {
    name : string,
    price : number
};

export default function Items(props:prop ) {
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