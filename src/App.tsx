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
      <main className="flex flex-col min-h-[calc(100vh-4rem-6rem)] xs:p-1.5 gap-2 overflow-y-auto">
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </main>
      <Footer />
    </div>
  );
}

export default App;
