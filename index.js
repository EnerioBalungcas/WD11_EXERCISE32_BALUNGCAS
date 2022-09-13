import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App'; // deleted as this file is not required
import HeadingBanner from './components/headingBanner.js';
import HeadingPart from './components/HeadingPart.js';
import ImageLayout from './components/imageLayout.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HeadingBanner></HeadingBanner>
    <HeadingPart></HeadingPart>
    <ImageLayout></ImageLayout>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
