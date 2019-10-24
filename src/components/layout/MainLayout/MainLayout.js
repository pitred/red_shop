import React from 'react';
import Navbar from '../Navbar/Navbar';
import PageContainer from '../PageContainer/PageContainer';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';

const MainLayout = ({
   products,
   sortAZ,
   sortZA,
   sortAscend,
   sortDescend,
   filterCategory,
   resetFiltering,
   searchProducts,
   cart,
   addProduct,
   removeProduct,
   clearCart,
   changeQuantity
}) => {
   return (
      <div className='main-layout'>
         <Navbar cartContent={cart.length} resetFiltering={resetFiltering} />
         <PageContainer
            products={products}
            sortAZ={sortAZ}
            sortZA={sortZA}
            sortAscend={sortAscend}
            sortDescend={sortDescend}
            filterCategory={filterCategory}
            searchProducts={searchProducts}
            cart={cart}
            addProduct={addProduct}
            removeProduct={removeProduct}
            clearCart={clearCart}
            changeQuantity={changeQuantity}
         />
         <Footer />
      </div>
   );
};

MainLayout.propTypes = {
   products: PropTypes.array,
   sortAZ: PropTypes.func,
   sortZA: PropTypes.func,
   sortAscend: PropTypes.func,
   sortDescend: PropTypes.func,
   filterCategory: PropTypes.func,
   searchProducts: PropTypes.func,
   cart: PropTypes.array,
   addProduct: PropTypes.func,
   removeProduct: PropTypes.func,
   clearCart: PropTypes.func,
   changeQuantity: PropTypes.func
};

export default MainLayout;
