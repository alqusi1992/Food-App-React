import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [cartItemsShow, setCartItemsShow] = useState(false);

  const showCartHandler = () => {
    setCartItemsShow(!cartItemsShow);
  };

  const hideCartHandler = () => {
    setCartItemsShow(false);
  };

  return (
    <CartProvider>
      {cartItemsShow && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
