import React from "react";
import "./Footer.css";

const Footer = () => <div className="fixed-bottom">


<footer className="font-small blue pt-4 bg-dark pageFooter ">
    <div className="container-fluid col-lg-8 col-lg-offset-2 text-center text-md-left">
        <div className="row">
            <div className="col-md-3 mt-md-0 mt-3">
                <h5 className="footerLogo"><a href="#"><span className="footerLogoWord">Films</span><span className="footerLogoAnd">&</span><span className="footerLogoWord">Models</span></a></h5>
                <p className="footerParagraph">Your favourite films and models.</p>
            </div>
            <hr className="clearfix w-100 d-md-none pb-0"/>
            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="">About</h5>
                <ul className="list-unstyled">
                    <li className="footerListLink"><a href="https://github.com/duokobia/films_and_models">GitHub</a></li>
                </ul>
            </div>
            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="">Contact Us</h5>
                <ul className="list-unstyled">
                    <li className="footerListLink"><a href="https://github.com/duokobia">duokobia</a></li>
                </ul>
            </div>
            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="">Location</h5>
                <ul className="list-unstyled">
                    <li className="footerListLink"><a href="https://github.com/duokobia">Remote</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div className="footer-copyright text-center pb-1 footerListLink">© 2022 Copyright:
        <a href="https://github.com/duokobia"> duokobia</a>
    </div>
</footer>
</div>

export default Footer;