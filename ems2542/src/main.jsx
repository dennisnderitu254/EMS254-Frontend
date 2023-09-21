import './style.css'
import App from './App';
import React from 'react';
import ReactDom from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDom.createRoot(document.getElementById('app')).render(
<React.StrictMode>
  <App />
</React.StrictMode>,
)
