import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HomeApp from './home'
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function MainApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeApp />}></Route>
        <Route path="angel%20jurisdiction%20water%20tissue%20hobby%20league%20quacks%20drawing%20farewell12345432109875680" element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MainApp />);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA