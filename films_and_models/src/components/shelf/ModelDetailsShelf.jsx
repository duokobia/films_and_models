import React from "react";
import PageContentTitle from "../pageContentTitle/PageContentTitle";
import ModelDetailsCard from "../card/ModelDetailsCard";
import pageTitle from "../../assets/data/PageTitles";

const ModelDetailsShelf = () => {
  
  return (
    <>
      <PageContentTitle title = {pageTitle.model}/>
      <ModelDetailsCard />
    </>
  )
};

export default ModelDetailsShelf;

