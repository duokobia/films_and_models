import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


 function Footer() {
  return (
    <div >
        <nav class="navbar navbar-expand-md bg-light">
        <div class="container-fluid col-xs-12 col-lg-8 col-lg-offset-2">
            <a class="navbar-brand h3" href="#">
                Films&Models
            </a>
          
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item mx-5">
                <a class="nav-link" aria-current="page" href="#">About</a>
                </li>
                <li class="nav-item mx-5">
                <a class="nav-link" href="#">Contact Us</a>
                </li>
                <li class="nav-item ms-5">
                <a class="nav-link" href="#">Location</a>
                </li>
            </ul>
            
            </div>
        </div>
        </nav>
    </div>
  )
};
export default Footer;
