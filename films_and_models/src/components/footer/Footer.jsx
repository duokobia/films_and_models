import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";


 function Footer() {
  return (
  
    <footer className="fixed-bottom">
      
        <div class="container-fluid col-xs-12 col-lg-8 col-lg-offset-2 bg-dark footerRow">
        <div className="row footerFirstRow">
            <div className="col-3">
            <h3 className="footerLogo">
                    <a class="navbar-brand" href="#">
                        <span className="footerLogoWord">Films</span><span className="footerLogoAnd">&</span><span className="footerLogoWord">Models</span> 
                    </a>
                </h3>
            </div>
            <div className="col-3">
                <ul class="footerNavList col-xs-12">
                    <li class="footerLink">
                    <a class="nav-linked" aria-current="page" href="#">About</a>
                    </li>
                    <li class=" footerLink ">
                    <a class="nav-linked" href="#">Contact Us</a>
                    </li>
                    <li class="footerLink ">
                    <a class="nav-linked" href="#">Location</a>
                    </li>
                </ul>
            </div>
              
               
        </div>
        <div className="row footerSecondRow">@Copyright 2022</div>
        </div>
       

    </footer>
    
  )
};
export default Footer;
