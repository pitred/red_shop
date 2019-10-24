import React from 'react';
import { Fade } from 'reactstrap';

import './Regulations.scss';

const Regulations = props => {
   return (
      <Fade timeout={100} className='regulations'>
         <h2 className='page-heading'>Regulations</h2>
         <ol className='regulations__list'>
            <li className='regulations__item'>
               <h5 className='regulations__heading'>Duis dapibus ante.</h5>
               <p className='regulations__text'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus ante sit amet velit blandit, eu laoreet orci maximus. Proin at
                  sollicitudin dui, nec pulvinar tortor. Nulla id aliquam justo, vel pharetra orci. Nam id sodales dolor. Morbi mollis lacinia nulla
                  nec tincidunt.
               </p>
            </li>
            <li className='regulations__item'>
               <h5 className='regulations__heading'>Phasellus ut nunc erat.</h5>
               <p className='regulations__text'>
                  Phasellus ut nunc erat. Donec commodo nisl a mauris malesuada, id ornare enim tristique. Suspendisse malesuada justo quis lacinia
                  dictum. Nulla lorem lacus, commodo non leo in, bibendum sagittis arcu. Ut pharetra, purus ullamcorper vestibulum ornare, sapien
                  justo accumsan velit, eu finibus ex lectus a metus. Duis molestie magna vel ligula euismod, vitae ultrices dolor ultricies. Nunc
                  eleifend eros in sem aliquam congue.
               </p>
            </li>
            <li className='regulations__item'>
               <h5 className='regulations__heading'>Donec commodo nisl.</h5>
               <p className='regulations__text'>
                  Etiam risus nisl, cursus sed viverra vitae, eleifend id justo. In hendrerit nulla et sapien volutpat bibendum vel gravida ante.
                  Aliquam sapien mi, maximus vitae porta ut, suscipit commodo odio. Nam vitae tortor at ligula tempor tincidunt. Praesent ut venenatis
                  nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mollis augue nisi, sed ultrices
                  lorem dictum molestie.
               </p>
            </li>
            <li className='regulations__item'>
               <h5 className='regulations__heading'>Cras sagittis, augue quis.</h5>
               <p className='regulations__text'>
                  Etiam metus odio, rhoncus tempor mollis id, finibus ac mi. Ut porta elementum tellus, et molestie ligula ultricies at. Mauris
                  ullamcorper arcu in tortor rutrum, et vehicula ipsum pretium. Cras interdum in nunc sed finibus. Duis nisl ligula, ultricies vitae
                  lorem porta, suscipit vestibulum ipsum.
               </p>
            </li>
            <li className='regulations__item'>
               <h5 className='regulations__heading'>Phasellus ut nunc erat.</h5>
               <p className='regulations__text'>
                  Cras sagittis, augue quis blandit bibendum, arcu odio imperdiet lacus, eget eleifend sapien erat vitae ex. Nam sagittis, enim at
                  dictum tincidunt, lacus nulla semper dolor, non ultricies ipsum lorem non felis. Nulla facilisi. Integer ac velit nec elit cursus
                  varius.
               </p>
            </li>
         </ol>
      </Fade>
   );
};

export default Regulations;
