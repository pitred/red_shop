import React from 'react';
import Button from '../../common/Button/Button';
import { Fade } from 'reactstrap';
import PropTypes from 'prop-types';

import './ProductPage.scss';

const ProductPage = ({ products, addProduct, ...props }) => {
   let activeProduct = products.find(product => product.id.toString() === props.match.params.id);
   const productInfoDisplay = activeProduct.info === '' ? 'none' : 'inline';

   return (
      <Fade timeout={100} className='product-page'>
         <div className='go-back' onClick={props.history.goBack}>
            <i className='fa fa-arrow-left go-back__icon'></i>
            Back
         </div>
         <div className='product'>
            <div className='product__image-box'>
               <img className='product__image' src={`/images/${activeProduct.image}`} alt={activeProduct.name} />
            </div>
            <div className='product__content'>
               <h2 className='product__heading'>{activeProduct.name}</h2>
               <p className='product__price'>
                  Price: <span>{activeProduct.price}zł</span>
               </p>
               <p className='product__info' style={{ display: productInfoDisplay }}>
                  State: <span>{activeProduct.info}</span>
               </p>
               <p className='product__description'>{activeProduct.description}</p>
               <Button buttonOutput='Dodaj do koszyka' onClickCallback={() => addProduct(activeProduct)} />
            </div>
         </div>
      </Fade>
   );
};

ProductPage.propTypes = {
   products: PropTypes.array,
   addProduct: PropTypes.func
};

export default ProductPage;
