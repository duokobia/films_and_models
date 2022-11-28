import React from 'react';
import "./ErrorHandlingPage.css";


const ErrorHandlingPage = () => {

  return (
    <div className="container-fluid bg-dark text-danger ">
       
      <div className="row errorPage">
        <div className="col-xs-12 col-lg-8 px-5 errorArticle" >
            <p className="errorParagraphBold"> 
                <span className="my-5">Oops!</span>
                <span>404 error!</span>
             </p>
            <p className="errorParagraph"> Page not found!</p>
        </div> 
      </div>
   
    </div>
  )
};
export default ErrorHandlingPage;  
