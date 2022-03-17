import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import { Fragment } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfItems = cartCtx.items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  return (
    <Fragment>
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart Shop</span>
        <span className={classes.badge}>{numberOfItems}</span>
      </button>
    </Fragment>
  );
};

export default HeaderCartButton;
