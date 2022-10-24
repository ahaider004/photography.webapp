import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HomeApp from './home'
import { BrowserRouter, Routes, Route } from "react-router-dom";

// require('dotenv').config()
const path  = process.env.REACT_APP_SECRET_KEY
console.log(path)
export default function MainApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeApp />}></Route>
        <Route path= {process.env.REACT_APP_SECRET_KEY} element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MainApp />);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA