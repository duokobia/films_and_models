import React from "react";
import BsFilmsModelActedInTable from "../bsTable/BsFilmsModelActedInTable";
import PageContentTitle from "../pageContentTitle/PageContentTitle";


const FilmsModelActedInShelf = () => {
  
  return (
    <>
      <PageContentTitle title = "All films your favourite model acted in."/>
      <BsFilmsModelActedInTable />
    </>
  )
};
export default FilmsModelActedInShelf;