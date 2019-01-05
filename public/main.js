import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import '../public/index.css';
import Root from './components/root'

ReactDOM.render(
    <BrowserRouter>
      <Root />
    </BrowserRouter>,
  document.getElementById('app') // make sure this is the same as the id of the div in your index.html
);
