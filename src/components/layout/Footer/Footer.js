import React from 'react';
import Menu from '../../features/Menu/Menu';
import { Container } from 'reactstrap';

import './Footer.scss';
import '../../features/Menu/Menu.scss';

const Footer = props => {
   return (
      <div className='footer'>
         <Container>
            <div className='footer__content'>
               <p className='footer__text'>
                  All rights reserved by <span>REDmotoSHOP</span>
               </p>
               <Menu className='menu' />
            </div>
         </Container>
      </div>
   );
};

export default Footer;
