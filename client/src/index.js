import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import index from './index.css'

//import redux
import {Provider} from 'react-redux'
import { store } from './store';



//provice redux store

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
     <App />
    </Provider>
    
  </React.StrictMode>
);

