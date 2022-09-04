import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ProductContextProvider } from './Context/ProductContext';
import {CartContextProvider} from './Context/CartContext'
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <ProductContextProvider>
      <CartContextProvider>
      <BrowserRouter>
        <App />
        </BrowserRouter>
        </CartContextProvider>
    </ProductContextProvider>
    {/* </CartContextProvider> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

