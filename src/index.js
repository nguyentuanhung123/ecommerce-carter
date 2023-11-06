import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//product provider
import ProductProvider from './contexts/ProductContext.jsx';
//sidebar provider
import SidebarProvider from './contexts/SidebarContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SidebarProvider>
    <ProductProvider>
      <App />
    </ProductProvider>
  </SidebarProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
