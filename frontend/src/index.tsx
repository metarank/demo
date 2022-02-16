import React from 'react';
import ReactDOM from 'react-dom';
import GDPR from './components/GDPR';
import Layout from './components/Layout';

ReactDOM.render(
  <React.StrictMode>
    <Layout />
    <GDPR />
  </React.StrictMode>,
  document.getElementById('root')
);
