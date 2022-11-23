import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Films from './pages/films/Films';
import Models from './pages/models/Models';
import ModelDetailsPage from './pages/models/ModelDetailsPage';
import ErrorHandlingPage from './pages/errorHandlingPage/ErrorHandlingPage';



function App() {
  return (
    <>
     <Header />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='films' element={<Films />} />
      <Route path='models' element={<Models />} />
      <Route path='modeldetails' element={<ModelDetailsPage />} />
      <Route path='*' element={<ErrorHandlingPage />} />
    </Routes>
    <Footer />

    </>

  );
}

export default App;
