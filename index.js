import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
// import $ from 'jquery';
// import Popper from 'popper.js';
// import './css/main.scss';
import HeadingBanner from './components/headingBanner.js';
import HeadingPart from './components/headingPart.js';
import ImageLayout from './components/imageLayout.js';
import CarouselSlides from './components/carouselCards.js'
// import ModalCards from './components/modalCards';
import Accordion from './components/accordion';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <HeadingBanner></HeadingBanner>
    <HeadingPart></HeadingPart>
    <ImageLayout></ImageLayout>
    <CarouselSlides></CarouselSlides>
    {/* <ModalCards></ModalCards> */}
    <Accordion></Accordion>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
  integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
  crossorigin="anonymous"
/>