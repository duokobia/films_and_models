import React,{ useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import "./ModelDetailsPage.css";
import ModelDetailsHeading from "./ModelDetailsHeading";



const ModelDetailsPage = () => {

  const {url} = useLocation().state;
  const [model, setModel] = useState({});
  const [Loading, setLoading] = useState(true);

  const modelData = async () => {
    try{
        const res = await fetch(url);
        const data = await res.json();
        const {properties} = data.result;
        console.log("response", properties);
        setModel(properties);
        console.log("details", model);
        setLoading(false);
    }catch(err){
        console.error(err)
    }
  };

  useEffect(() => {
    modelData();
  }, []);

  

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
          <div className="container-fluid col-xs-12 col-lg-8 mt-2 modelDetailsPageContainer ">
            <div className="row">
              <ModelDetailsHeading />
            </div>
            <div className="row ms-2"> 
                <div className="col-xs-12 col-lg-6 my-5">
                      <Card className="text-bg-light">
                          <Card.Body className="mt-5 mb-4 mx-auto">
                          <Card.Title  className="mb-4"><h2>{model.name}'s features</h2></Card.Title>
                          <Card.Text className="mb-4" >
                            <span className="cardText"> Physical features of <span>{model.name}</span></span>
                          </Card.Text>
                          <Card.Subtitle className="mb-3 text-muted cardSubtitle"><span>Birth Year</span><span className="ms-3">{model.birth_year}</span></Card.Subtitle>
                          <Card.Subtitle className="mb-3 text-muted"><span>Gender:</span><span className="ms-3">{model.gender}</span></Card.Subtitle>
                          <Card.Subtitle className="mb-3 text-muted"><span>Height:</span><span className="ms-3">{model.height}</span></Card.Subtitle>
                          <Card.Subtitle className="mb-3 text-muted"><span>Mass:</span><span className="ms-3">{model.mass}</span></Card.Subtitle>
                          <Card.Subtitle className="mb-3 text-muted"><span>Skin Color:</span><span className="ms-3">{model.skin_color}</span></Card.Subtitle>
                          <Card.Subtitle className="mb-3 text-muted"><span>Hair Color:</span><span className="ms-3">{model.hair_color}</span></Card.Subtitle>
                          <Card.Subtitle className="mb-5 text-muted"><span>Eye Color:</span><span className="ms-3">{model.eye_color}</span></Card.Subtitle>
                          <Card.Link href="/models">Back to models' list</Card.Link>
                          </Card.Body>
                      </Card>
                  </div>
                  <div className="col-xs-12 col-lg-6 my-5">
                      <Card className="text-bg-light">
                          <Card.Body className="mt-5 mb-4 mx-auto">
                          <Card.Title  className="mb-4"><h2>{model.name}'s films</h2></Card.Title>
                          <Card.Text className="mb-4" >
                              Films {model.name} featured in: 
                          </Card.Text>
                          <Card.Subtitle className="mb-3 text-muted"><span>Film Title:</span><a href="/films/"><span className="ms-3">Heros of the WarHead.</span></a></Card.Subtitle>
                          <Card.Subtitle className="mb-3 text-muted"><span>Film Title:</span><a href="/films/:id"><span className="ms-3">Begin the War Soon.</span></a></Card.Subtitle>
                          <Card.Subtitle className="mb-3 text-muted"><span>Film Title:</span><a href="/films/:id"><span className="ms-3">End of the Third WorldWar.</span></a></Card.Subtitle>
                          <Card.Subtitle className="mb-3 text-muted"><span>Film Title:</span><a href="/films/:id"><span className="ms-3">Alice of the Jungle.</span></a></Card.Subtitle>
                          <Card.Subtitle className="mb-3 text-muted"><span>Film Title:</span><a href="/films/:id"><span className="ms-3">Aladin and the forty Gangs.</span></a></Card.Subtitle>
                          <Card.Subtitle className="mb-3 text-muted"><span>Film Title:</span><a href='#'><span className="ms-3">Leaving the South Sea Lonely.</span></a></Card.Subtitle>
                          <Card.Subtitle className="mb-5 text-muted"><span>Film Title:</span><a href='#'><span className="ms-3">Wars Without End.</span></a></Card.Subtitle>
                          <Card.Link href="/films">Back to films' list</Card.Link>
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

export default ModelDetailsPage;