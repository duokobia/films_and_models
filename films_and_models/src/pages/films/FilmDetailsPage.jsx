import React,{ useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import FilmDetailsHeading from "./FilmDetailsHeading";
import "./FilmDetailsPage.css";


const FilmDetailsPage = () => {

    const {urls} = useLocation().state;
    const [Loading, setLoading] = useState(true);
    const [spec, setSpec] = useState([]);
  
    const filmData = async () => {
      try{
        let models = await Promise.all(urls.map(url => fetch(url)));
        let nestedCharacterUrl = await Promise.all(models.map(model => model.json()))
        setSpec(nestedCharacterUrl);
        setLoading(false);
        console.log(nestedCharacterUrl);
      }catch(err){
          console.error(err)
      }
    };
  
    useEffect(() => {
        filmData();
    }, [urls]);

  return (
    <>
    {Loading ? (
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
        ) : ( 
          <div className="container-fluid col-xs-12 col-lg-8 mt-2 filmDetailsPageContainer ">
            <div className="row">
              <FilmDetailsHeading />
            </div>
            <div className="row">
            <div className="col-xs-12 col-lg-6 my-4 mx-auto">
                  <Card className="text-bg-light mb-5">
                      <Card.Body className="mt-5 mb-4 mx-auto">
                      <Card.Title  className="mb-4"><h2>All models in this film.</h2></Card.Title>
                      <Card.Subtitle className="mb-3 text-muted"><span className="ms-3">{spec.map((m) => <h5>Model Name: <a href="/films" className="filmModels ms-3">{m.name}</a> </h5>)}</span></Card.Subtitle>
                      <Card.Link href="/films" className="backToFilmsList">Back to films' list</Card.Link>
                      </Card.Body>
                  </Card>
                </div>
            </div>
          </div>
        )
    }
    </>
  )
}

export default FilmDetailsPage;