import React from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'reactstrap';

import './NoMatch.scss';

const NoMatch = props => {
   return (
      <Fade className='no-match' timeout={100}>
         <div className='no-match__error'>404</div>
         <div className='no-match__info'>Page not found.</div>
         <Link className='no-match__link' to='/'>
            <div className='go-back'>
               <i className='fas fa-arrow-left go-back__icon'></i>
               Return to main page
            </div>
         </Link>
      </Fade>
   );
};

export default NoMatch;
