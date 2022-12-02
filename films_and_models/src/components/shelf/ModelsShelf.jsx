import React from "react";
import BsModelsTable from "../bsTable/BsModelsTable";
import PageContentTitle from "../pageContentTitle/PageContentTitle";
import pageTitle from "../../assets/data/PageTitles";

const ModelsShelf = () => {

  return (
    <>
      <PageContentTitle title = {pageTitle.models} />
      <BsModelsTable />
    </>
  )
};

export default ModelsShelf;

