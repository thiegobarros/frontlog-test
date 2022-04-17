import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import frontlog from 'frontlog-storage';

frontlog({
  storage: 'session',
  logByAttribute: true,
  logClicks: true,
  logKeyPress: true,
  logErrors: true,
  logOnHover: true,
  onHoverTiming: 3000,
  endPoint: 'frontlog/UrlToBackEnd',
  sendingTiming: 10000,
  headers: [
    ['Access-Control-Allow-Credentials', 'true'],
    ['Content-Type', 'application/json']
  ]
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
