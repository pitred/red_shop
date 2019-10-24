import React from 'react';
import { Fade } from 'reactstrap';

import './FAQ.scss';

const FAQ = props => {
   return (
      <Fade timeout={100} className='faq'>
         <h2 className='page-heading'>Frequently Asked Questions</h2>
         <h3 className='faq__question'>How to make an order ?</h3>
         <p className='faq__answer'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus ante sit amet velit blandit, eu laoreet orci maximus. Proin at
            sollicitudin dui, nec pulvinar tortor. Nulla id aliquam justo, vel pharetra orci. Nam id sodales dolor. Morbi mollis lacinia nulla nec
            tincidunt. Pellentesque tempus tristique purus, sed commodo tortor cursus ut. Nunc ullamcorper rhoncus tellus vitae fringilla. Maecenas
            turpis odio, rhoncus quis euismod non, sodales non nisi. Pellentesque vel nulla non tortor fermentum interdum quis ac ligula. Integer
            ipsum ante, elementum vitae convallis ut, ullamcorper et nisl. Ut varius tempor orci non semper.
         </p>
         <h3 className='faq__question'>How long will I be waiting for the goods ?</h3>
         <p className='faq__answer'>
            Phasellus ut nunc erat. Donec commodo nisl a mauris malesuada, id ornare enim tristique. Suspendisse malesuada justo quis lacinia dictum.
            Nulla lorem lacus, commodo non leo in, bibendum sagittis arcu. Ut pharetra, purus ullamcorper vestibulum ornare, sapien justo accumsan
            velit, eu finibus ex lectus a metus. Duis molestie magna vel ligula euismod, vitae ultrices dolor ultricies. Nunc eleifend eros in sem
            aliquam congue. Vivamus ultricies, nulla vitae tristique pellentesque, nisl lorem ultrices lorem, quis ullamcorper nunc odio ut neque.
            Integer nulla odio, porta at lacinia facilisis, porta ut lectus. Ut eu facilisis orci. Aliquam lacinia faucibus dictum. Cras ac orci
            lorem. Integer efficitur diam sed justo sollicitudin porttitor.
         </p>
         <h3 className='faq__question'>Can I cancel my order ?</h3>
         <p className='faq__answer'>
            Etiam metus odio, rhoncus tempor mollis id, finibus ac mi. Ut porta elementum tellus, et molestie ligula ultricies at. Mauris ullamcorper
            arcu in tortor rutrum, et vehicula ipsum pretium. Cras interdum in nunc sed finibus. Duis nisl ligula, ultricies vitae lorem porta,
            suscipit vestibulum ipsum. Phasellus sed augue non felis consequat pellentesque. Phasellus a convallis felis. Maecenas non lorem nec elit
            ultrices dignissim. Vestibulum eu molestie leo. Donec imperdiet nisl lorem, ac condimentum nunc vestibulum et. Etiam eget lorem felis.
            Morbi non ante ac nunc dictum condimentum. Ut massa magna, semper nec egestas in, consectetur non diam.
         </p>
         <h3 className='faq__question'>How to make complaints ?</h3>
         <p className='faq__answer'>
            Cras sagittis, augue quis blandit bibendum, arcu odio imperdiet lacus, eget eleifend sapien erat vitae ex. Nam sagittis, enim at dictum
            tincidunt, lacus nulla semper dolor, non ultricies ipsum lorem non felis. Nulla facilisi. Integer ac velit nec elit cursus varius. Nulla
            tempor tellus sed lectus mollis, eget maximus lectus rhoncus. Aenean cursus quis urna nec pharetra. Sed sollicitudin dui odio, non ornare
            neque cursus blandit.
         </p>
      </Fade>
   );
};

export default FAQ;
