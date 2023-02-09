import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';

import './styles/css/reset.module.css';
import './styles/css/base.module.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Main />
    <Footer />
  </React.StrictMode>
);

