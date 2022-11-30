import React from "react";
import BsFilmsTable from "../bsTable/BsFilmsTable";
import PageContentTitle from "../pageContentTitle/PageContentTitle";


const FilmsShelf = () => {
  
  return (
    <>
      <PageContentTitle title = "Your favourite films of the year."/>
      <BsFilmsTable />
    </>
  )
};
export default FilmsShelf;

