import React from "react";
import pageTitle from "../../assets/data/PageTitles";
import BsFilmsModelActedInTable from "../bsTable/BsFilmsModelActedInTable";
import PageContentTitle from "../pageContentTitle/PageContentTitle";


const FilmsModelActedInShelf = () => {
  
  return (
    <>
      <PageContentTitle title = {pageTitle.allFilmsActedIn} />
      <BsFilmsModelActedInTable />
    </>
  )
};

export default FilmsModelActedInShelf;