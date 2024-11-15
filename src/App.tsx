import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <main className="bg-yellow-500">
      <Header />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <Footer />
    </main>
  );
}

export default App;
