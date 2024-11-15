import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </main>
  );
}

export default App;
