import React from "react";
import {Routes, Route} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/NewFooter";
import Home from "./pages/home/Home";
import Films from "./pages/films/Films";
import Models from "./pages/models/Models";
import ModelDetailsPage from "./pages/models/ModelDetailsPage";
import FilmDetailsPage from "./pages/films/FilmDetailsPage";
import ErrorHandlingPage from "./pages/errorHandlingPage/ErrorHandlingPage";



const App = () => {
  return (
    <>
     <Header />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="films" element={<Films />} />
      <Route path="models" element={<Models />} />
      <Route path="models/:Id" element={<ModelDetailsPage />} />
      <Route path="films/:Id" element={<FilmDetailsPage />} />
      <Route path="*" element={<ErrorHandlingPage />} />
    </Routes>
    <Footer />
  </>

  );
}

export default App;
