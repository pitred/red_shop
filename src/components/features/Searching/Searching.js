import React from 'react';
import PropTypes from 'prop-types';

import './Searching.scss';

const Searching = ({ searchingText, onTextChange, onSearch }) => {
   return (
      <form className='searching' onSubmit={onSearch}>
         <input type='text' className='searching__input' value={searchingText} onChange={onTextChange} placeholder='Search' />
         <button className='searching__button' type='submit'>
            <i className='fa fa-search searching__icon'></i>
         </button>
      </form>
   );
};

Searching.propTypes = {
   searchingText: PropTypes.string,
   onTextChange: PropTypes.func,
   onSearch: PropTypes.func
};

export default Searching;
