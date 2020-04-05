import React from 'react';

import { ReactComponent as ShoppngIcon } from '../../assets/shopping-bag.svg';

import './card-icon.style.scss';

const CartIcon = () => (
  <div className="cart-icon">
    <ShoppngIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

export default CartIcon;
