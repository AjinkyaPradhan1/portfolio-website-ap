import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Qual from "./components/Qual";
import Projects from "./components/Projects";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/skills" element={ <Skills /> } />
        <Route path="/qual" element={ <Qual /> } />
        <Route path="/projects" element={ <Projects /> } />
      </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
