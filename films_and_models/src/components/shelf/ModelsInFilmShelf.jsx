import React from "react";
import PageContentTitle from "../pageContentTitle/PageContentTitle";
import AllModelsInAFilmCard from "../card/AllModelsInAFilmCard";
import pageTitle from "../../assets/data/PageTitles";

const ModelsInFilmShelf = () => {
  
  return (
    <>
      <PageContentTitle title = {pageTitle.allModelsInThisfilm}/>
      <AllModelsInAFilmCard />
    </>
  )
};

export default ModelsInFilmShelf;

