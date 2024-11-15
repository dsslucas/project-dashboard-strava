import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="flex flex-col bg-gray-200 h-svh">
      <Header />
      <main className="flex flex-col flex-1 min-h-[calc(100vh-4rem-6rem)]">
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </main>
      <Footer />
    </div>
  );
}

export default App;
