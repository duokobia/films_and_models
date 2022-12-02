import React from "react";
import BsFilmsTable from "../bsTable/BsFilmsTable";
import PageContentTitle from "../pageContentTitle/PageContentTitle";
import pageTitle from "../../assets/data/PageTitles";

const FilmsShelf = () => {
  
  return (
    <>
      <PageContentTitle title = {pageTitle.films}/>
      <BsFilmsTable />
    </>
  )
};

export default FilmsShelf;

