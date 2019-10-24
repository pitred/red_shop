import React from 'react';
import Button from '../../common/Button/Button';
import PropTypes from 'prop-types';

import './CartProduct.scss';

const CartProduct = ({ cartProduct, removeFromCart, changeQuantity }) => {
   let quantity = cartProduct.quantity;
   const handleChange = e => {
      quantity = e.target.value === '' ? e.target.value : parseInt(e.target.value);
      changeQuantity(cartProduct.id, quantity);
   };
   return (
      <li className='cart-product'>
         <div className='cart-product__first-row'>
            <div className='cart-product__name-wrapper'>
               <div className='cart-product__image' style={{ backgroundImage: `url(/images/${cartProduct.image})` }}></div>
               <h3 className='cart-product__name'>{cartProduct.name}</h3>
            </div>
            <div className='cart-product-button'>
               <button className='cart-product__button-up' onClick={() => changeQuantity(cartProduct.id, cartProduct.quantity + 1)}>
                  <i className='fa fa-angle-up cart-product__icon'></i>
               </button>
               <input type='number' className='cart-product__input' value={quantity} onChange={handleChange} />
               <button className='cart-product__button-down' onClick={() => changeQuantity(cartProduct.id, cartProduct.quantity - 1)}>
                  <i className='fa fa-angle-down cart-product__icon'></i>
               </button>
               <Button className='cart-product__button-remove' buttonOutput='Delete product' onClickCallback={removeFromCart} />
            </div>
         </div>
         <div className='cart-product__price-wrapper'>
            <p className='cart-product__price'>
               Price: <span>{cartProduct.price}pln</span>
            </p>
            <p className='cart-product__amount'>
               Amount: <span>{cartProduct.quantity * cartProduct.price}pln</span>
            </p>
         </div>
      </li>
   );
};

CartProduct.propTypes = {
   cartProduct: PropTypes.object,
   removeFromCart: PropTypes.func,
   changeQuantity: PropTypes.func
};

export default CartProduct;
