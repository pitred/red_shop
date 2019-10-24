import React from 'react';
import Searching from '../Searching/Searching';
import Sorting from '../Sorting/Sorting';
import CategoriesList from '../CategoriesList/CategoriesList';
import PropTypes from 'prop-types';

import './Sidebar.scss';

const Sidebar = ({
   sortAscend,
   sortDescend,
   sortAZ,
   sortZA,
   filterCategory,
   activeFilter,
   setActiveFilter,
   searchingText,
   handleTextChange,
   handleSearching,
   toggleActiveClassName,
   sidebarShow
}) => {
   const sidebarClassName = sidebarShow ? 'sidebar' : 'sidebar sidebar-hidden';

   return (
      <div className={sidebarClassName}>
         <Searching searchingText={searchingText} onTextChange={handleTextChange} onSearch={handleSearching} />
         <CategoriesList
            filterCategory={filterCategory}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
            toggleActiveClassName={toggleActiveClassName}
         />
         <Sorting
            onSortAscend={sortAscend}
            onSortDescend={sortDescend}
            onSortAZ={sortAZ}
            onSortZA={sortZA}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
            toggleActiveClassName={toggleActiveClassName}
         />
      </div>
   );
};

Sidebar.propTypes = {
   sortAscend: PropTypes.func,
   sortDescend: PropTypes.func,
   sortAZ: PropTypes.func,
   sortZA: PropTypes.func,
   filterCategory: PropTypes.func,
   activeFilter: PropTypes.object,
   setActiveFilter: PropTypes.func,
   searchingText: PropTypes.string,
   handleTextChange: PropTypes.func,
   handleSearching: PropTypes.func,
   toggleActiveClassName: PropTypes.func,
   sidebarShow: PropTypes.bool
};

export default Sidebar;
