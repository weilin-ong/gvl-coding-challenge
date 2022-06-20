import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { OrderProvider } from './contexts/order.context';
import './index.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <OrderProvider>
        <App />
      </OrderProvider>
    </BrowserRouter>
  </React.StrictMode>
);
