import React from 'react';
import CartProductsList from '../../features/CartProductList/CartProductList';
import Button from '../../common/Button/Button';
import Payment from '../../features/Payment/Payment';
import { Modal, Fade } from 'reactstrap';
import PropTypes from 'prop-types';

import './Cart.scss';

class Cart extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         modal: false
      };
   }

   calculateAmount = () => {
      let amount = 0;
      this.props.cartProducts.forEach(product => {
         amount += product.quantity * product.price;
      });
      return amount;
   };

   openModal = () => {
      this.setState({ modal: true });
   };

   closeModal = () => {
      this.setState({ modal: false });
   };

   renderCart = () => {
      this.calculateAmount();
      return (
         <Fade timeout={100} className='cart'>
            <div className='cart__buttons-wrapper'>
               <div
                  className='go-back'
                  onClick={() => {
                     this.props.history.goBack();
                     window.scroll(0, 0);
                  }}>
                  <i className='fa fa-arrow-left go-back__icon'></i>
                  Back
               </div>
               <Button className='cart__button' buttonOutput='Clear cart' onClickCallback={this.props.clearCart} />
            </div>
            <CartProductsList
               cartProducts={this.props.cartProducts}
               removeFromCart={this.props.removeProduct}
               changeQuantity={this.props.changeQuantity}
            />
            <h4 className='cart__amount'>
               Value of the order: <span>{this.calculateAmount()}zł</span>
            </h4>
            <Button className='cart__button' buttonOutput='Go to payment' onClickCallback={this.openModal} />
            <Modal isOpen={this.state.modal}>
               <Payment amount={this.calculateAmount()} closeModal={this.closeModal} clearCart={this.props.clearCart} />
            </Modal>
         </Fade>
      );
   };
   renderEmptyCart = () => {
      return (
         <Fade timeout={100} className='cart cart--empty'>
            <p className='cart__info'>Your cart is empty.</p>
            <div
               className='go-back'
               onClick={() => {
                  this.props.history.goBack();
                  window.scroll(0, 0);
               }}>
               <i className='fa fa-arrow-left go-back__icon'></i>
               Back
            </div>
         </Fade>
      );
   };
   render() {
      return this.props.cartProducts.length !== 0 ? this.renderCart() : this.renderEmptyCart();
   }
}

Cart.porpTypes = {
   cartProducts: PropTypes.array,
   removeProduct: PropTypes.func,
   clearCart: PropTypes.func,
   changeQuantity: PropTypes.func,
   openModal: PropTypes.func,
   closeModal: PropTypes.func
};

export default Cart;
