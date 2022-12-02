import React from "react";
import "./Hero.css";

const Hero = () => {

  return (
    <div className="container-fluid col-xs-12 col-lg-8 col-lg-offset-2 hero-bg">
       {/* Photo by <a href="https://unsplash.com/@fkaregan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Samuel Regan-Asante</a> on <a href="https://unsplash.com/s/photos/movie?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>  */}
        <div className="row hero-article">
            <div className="col-xs-12 col-lg-8 bg-layer d-flex align-items-center justify-content-center">
              <p className="hero-paragraph">
                <span className="hero-span">Get details of your favourite</span>
                <span className="hero-span">films and models here.</span>
              </p>  
            </div> 
        </div>
    </div>
  )
};

export default Hero;
