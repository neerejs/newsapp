import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNav from './TopNav.js';
import Section from './Section.js';
import Editions from './Editions.js';
import FAQ from './FAQ.js';
import FormikForm from './FormikForm';
import States from './States';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <TopNav />
      <Routes>
        <Route path="/" element={<App />}> </Route>
        <Route path="/sections" element={<Section />}> </Route>
        <Route path="/editions" element={<Editions />}> </Route>
        <Route path="/faq" element={<FAQ />}> </Route>
        <Route path="/formik" element={<FormikForm />}> </Route>
        <Route path="/states" element={<States />}> </Route>
      </Routes>
    </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
