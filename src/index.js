import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa desde react-dom/client
import './index.css';
import { AppProvider } from '../src/context';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);

