import React from 'react';
import './Hero.css';

 function Hero() {
  return (
    <div className="container-fluid col-xs-12 col-lg-8 col-lg-offset-2 hero-bg d-flex align-items-center justify-content-center">
        <div className="row">
            <div className=" col-10 offset-1 hero-text">
                Get details of your favourite films and models here.
            </div> 
        </div>
    </div>
  )
}
export default Hero;
