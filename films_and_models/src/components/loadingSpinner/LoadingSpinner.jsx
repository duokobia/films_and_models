import React from 'react';
import "./LoadingSpinner.css";
import Spinner from "react-bootstrap/Spinner";

const LoadingSpinner = () => {
  return (
    <div className="my-auto loadingSpinner">       
        <div className="row mx-auto my-5">
            <Spinner animation="border" variant="primary" size="lg" role="status"/>
            <Spinner animation="border" variant="secondary" size="lg" role="status" />
            <Spinner animation="border" variant="success" size="lg" role="status" />
            <Spinner animation="border" variant="danger" size="lg" role="status"/>
            <Spinner animation="border" variant="warning" size="lg" role="status" />
            <Spinner animation="border"  variant="info" size="lg" role="status"/>
        </div>
        <div className="row">
            <p className="loadingMessage">Loading data. Please wait...</p>
        </div>
  </div>
  )
}

export default LoadingSpinner;