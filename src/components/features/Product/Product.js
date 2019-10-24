import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';
import { Col, Fade } from 'reactstrap';
import PropTypes from 'prop-types';

import './Product.scss';

const Product = ({ product, addToCart }) => {
   const infoDisplay = product.info === '' ? 'none' : 'block';
   return (
      <Col md='12' lg='6' className='product-card-wrapper'>
         <Fade timeout={100}>
            <div className='product-card'>
               <Link to={`/cakes/${product.id}`} className='product-card__link'>
                  <div className='product-card__image' alt={product.name} style={{ backgroundImage: `url(/images/${product.image})` }}>
                     <div className='product-card__info' style={{ display: infoDisplay }}>
                        {product.info}
                     </div>
                  </div>
               </Link>
               <div>
                  <h3 className='product-card__heading'>{product.name}</h3>
                  <p className='product-card__price'>Price: {product.price}zł</p>
                  <Button
                     buttonOutput='Add to cart'
                     onClickCallback={() => {
                        addToCart(product);
                     }}
                  />
               </div>
            </div>
         </Fade>
      </Col>
   );
};

Product.propTypes = {
   product: PropTypes.object,
   addToCart: PropTypes.func
};

export default Product;
