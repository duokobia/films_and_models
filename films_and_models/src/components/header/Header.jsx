import React from "react";
import { NavLink } from "react-router-dom"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/collapse";
import "bootstrap/js/dist/offcanvas";
import "./Header.css";


const Header = () => {
  return (
    <div class = "sticky-top">
        <nav class="navbar navbar-expand-md navbar-dark bg-dark ">
            <div class="container-fluid col-xs-12 col-lg-8 col-lg-offset-2">
                <h1 className="navLogo">
                    <a class="navbar-brand" href="#">
                        <span className="navLogoWord">Films</span><span className="navLogoAnd">&</span><span className="navLogoWord">Models</span> 
                    </a>
                </h1>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <nav class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <NavLink to="/" class="nav-item mx-5 px-5">
                        <a class="nav-link ms-auto" aria-current="page" href="#">Home</a>
                        </NavLink>
                        <NavLink to="/films" class="nav-item mx-5">
                        <a class="nav-link ms-auto" href="#">Films</a>
                        </NavLink>
                        <NavLink to="/models" class="nav-item ms-5">
                        <a class="nav-link ms-auto" href="#">Models</a>
                        </NavLink>
                    </nav>
                </div>
            </div>
        </nav>

        <div class="offcanvas offcanvas-end h-100 w-75" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Films<span className="offcanvasLogoAnd">&</span>Models</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <nav class="dropdown ms-2">
                    <NavLink to="/" class="dropdown-item mb-3">Home</NavLink>
                    <NavLink to="/films" class="dropdown-item my-3">Films</NavLink>
                    <NavLink to="/models" class="dropdown-item mt-3">Models</NavLink>
                </nav>
            </div>
        </div>
    </div>
  )
};
export default Header;
