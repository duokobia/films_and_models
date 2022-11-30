import React from "react";
import {Routes, Route} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Films from "./pages/films/Films";
import Models from "./pages/models/Models";
import ModelDetailsShelf from "./components/shelf/ModelDetailsShelf"
import ModelsInFilmShelf from "./components/shelf/ModelsInFilmShelf"
import ErrorHandlingPage from "./pages/errorHandlingPage/ErrorHandlingPage";
import FilmsModelActedInShelf from "./components/shelf/FilmsModelActedInShelf";



const App = () => {
  return (
    <>
     <Header />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="films" element={<Films />} />
      <Route path="films/:Id" element={<ModelsInFilmShelf />} />
      <Route path="models" element={<Models />} />
      <Route path="models/:Id" element={<ModelDetailsShelf />} />
      <Route path="modelfilms/:Id" element={<FilmsModelActedInShelf />} />
      <Route path="*" element={<ErrorHandlingPage />} />
    </Routes>
    <Footer />
  </>

  );
}

export default App;
