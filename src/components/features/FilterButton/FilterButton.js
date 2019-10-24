import React from 'react';
import PropTypes from 'prop-types';

import './FilterButton.scss';

const FilterButton = ({ toggleSidebar, sidebarShow }) => {
   const buttonText = sidebarShow ? 'Hide filter' : 'Show filter';
   return (
      <div className='filter-button' onClick={toggleSidebar}>
         <span>{buttonText}</span>
         <i className='fa fa-filter filter-button__icon'></i>
      </div>
   );
};

FilterButton.propTypes = {
   sidebarShow: PropTypes.bool,
   toggleSidebar: PropTypes.func
};

export default FilterButton;
