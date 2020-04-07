import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { ReactComponent as ShoppngIcon } from '../../assets/shopping-bag.svg';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import './card-icon.style.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppngIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
