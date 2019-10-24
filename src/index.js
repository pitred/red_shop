import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import ScrollToTop from './components/ScrollToTop';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './styles/index.scss';

const Root = () => (
   <Provider store={store}>
      <Router>
         <ScrollToTop>
            <App />
         </ScrollToTop>
      </Router>
   </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
