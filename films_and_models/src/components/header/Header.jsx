import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/offcanvas';


 function Header() {
  return (
    <div class = "sticky-top">
        <nav class="navbar navbar-expand-md bg-light">
            <div class="container-fluid col-xs-12 col-lg-8 col-lg-offset-2">
                <a class="navbar-brand h1" href="#">
                    Films&Models
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item mx-3">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item mx-3">
                        <a class="nav-link" href="#">Films</a>
                        </li>
                        <li class="nav-item ms-3">
                        <a class="nav-link" href="#">Models</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="offcanvas offcanvas-end h-100 w-75" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Films&Models</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div class="dropdown ms-2">
                    <a class="dropdown-item my-2" href="#">Home</a>
                    <a class="dropdown-item my-2" href="#">Films</a>
                    <a class="dropdown-item my-2" href="#">Models</a>
                </div>
            </div>
        </div>
    </div>
  )
};
export default Header;
