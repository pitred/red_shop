import React from 'react';
import Category from '../Category/Category';

import './CategoriesList.scss';

const CategoriesList = ({ filterCategory, activeFilter, setActiveFilter, toggleActiveClassName }) => {
   const categories = [
      { categoryName: 'cabrio', categoryOutput: 'Cabrio' },
      { categoryName: 'oldtimer', categoryOutput: 'Oldtimers' },
      { categoryName: 'exclusive', categoryOutput: 'Exclusives' },
      { categoryName: 'vintage', categoryOutput: 'Vintage' },
      { categoryName: 'pickup', categoryOutput: 'Pickup' },
      { categoryName: 'sport', categoryOutput: 'Sport' },
      { categoryName: 'super', categoryOutput: 'Super Cars' }
   ];
   return (
      <ul className='categories-list'>
         {categories.map(category => (
            <Category
               category={category}
               activeFilter={activeFilter}
               setActiveFilter={setActiveFilter}
               onFilterCategory={() => filterCategory(category.categoryName)}
               toggleActiveClassName={toggleActiveClassName}
               key={category.categoryName}
            />
         ))}
      </ul>
   );
};

export default CategoriesList;
