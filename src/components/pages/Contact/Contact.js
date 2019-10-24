import React from 'react';
import { Fade } from 'reactstrap';

import './Contact.scss';

const Contact = props => {
   return (
      <Fade timeout={100} className='contact'>
         <h2 className='page-heading'>Contact</h2>
         <h4 className='contact__item'>Adress:</h4>
         <p>No Name Street 123, 20-220 Happy Town</p>
         <h4 className='contact__item'>Phone:</h4>
         <p>48 123 456</p>
         <h4 className='contact__item'>E-mail:</h4>
         <p>shop@shop.com</p>
      </Fade>
   );
};

export default Contact;
