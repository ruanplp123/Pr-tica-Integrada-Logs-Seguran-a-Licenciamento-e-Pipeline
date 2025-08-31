import ErrorBoundary from './telemetry/ErrorBoundary';
import { installGlobalErrorHandlers } from './telemetry/globals.js';
import { initDatadog } from './telemetry/datadog';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './app/store'
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals';

installGlobalErrorHandlers();

// Inicializa Datadog (se tiver token)
if (process.env.REACT_APP_DD_CLIENT_TOKEN) {
  initDatadog();
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

