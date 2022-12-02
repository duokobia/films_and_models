import React from "react";

const PageContentTitle = ({title}) => {

  return (
    <div className="container col-xs-12 col-lg-8 my-5 text-center">
      <h2 className="row d-flex align-item-center justify-content-center fs-2 fw-normal">
       {title}
      </h2>
    </div>
  )
};

export default PageContentTitle;