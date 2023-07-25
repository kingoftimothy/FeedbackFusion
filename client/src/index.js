import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';


// DEV ONLY
import axios from 'axios';
window.axios = axios;


const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
 
// Get a reference to the div with ID root
const el = document.getElementById("root");
 
// Tell React to take control of that element
const root = ReactDOM.createRoot(el);
 
// Show the component on the screen
root.render(
    <Provider store = {store}><App /></Provider>, 
    
);

