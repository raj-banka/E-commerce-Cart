import './App.css'
// import { useContext } from 'react'
// import { CartContext } from './Context/CartContext'
import Cart from './Components/Items';
import Items from './Components/Cart';

function App() {
// const context = useContext(CartContext);
  return (
    <>
      <Cart name="Pendrive" price={100}/>
      <Cart name="mobile" price={1000}/>
      <Cart name="Tv" price={2000} />
      <Items  />
    </>
  )
}

export default App
