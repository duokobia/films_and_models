import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
       <Header />
       <Hero />
       <Footer />
    </div>
  );
}

export default App;
