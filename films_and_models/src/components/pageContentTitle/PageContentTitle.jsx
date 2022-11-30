import React from "react";
import pageTitle from "../../assets/data/PageTitles";


const PageContentTitle = (props) => {

  // const pageTitle = [
  //    film = "Details of your favourite film.",
   //   filmModels = "Models featured in target film.",
  //    films = "Your favourite films of the year.",
  //    model = "Details of your favourite model of the year.",
  //    models = "Top 10 models of the year and their details.",
  //    allfilmsActedIn = "All films your favourite model acted in.",
  // ];

  return (
    <div className="container col-xs-12 col-lg-8 my-5">
      <h2 className="row d-flex align-item-center justify-content-center mx-2 ">
       {props.title}
      </h2>
    </div>
  )
};

export default PageContentTitle;