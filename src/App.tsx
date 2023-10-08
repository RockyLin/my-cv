import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>

      <main>
        Here are the projects I did in the past few years.
      </main>

      <Footer/>
    </div>
  );
}

export default App;
