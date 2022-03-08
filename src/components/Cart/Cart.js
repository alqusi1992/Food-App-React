import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = ({ onClose }) => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {' '}
      {[{ id: 'm1', name: 'Sushi', price: 22.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>40.41</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
