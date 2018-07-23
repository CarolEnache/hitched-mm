import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './Nav';
import registerServiceWorker from './registerServiceWorker';

// As the development will progress each component will be imported in this file instead of the App
// and they will be wraped with the Provider from React-Redux;


ReactDOM.render(<Nav />, document.getElementById('root'));
registerServiceWorker();
