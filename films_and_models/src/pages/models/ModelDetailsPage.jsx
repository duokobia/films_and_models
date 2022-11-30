import React,{ useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./ModelDetailsPage.css";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";



const ModelDetailsPage = () => {

  const {url} = useLocation().state;
  const [model, setModel] = useState({});
  const [Loading, setLoading] = useState(false);

  const modelData = async () => {
    try{
        const res = await fetch(url);
        const data = await res.json();
        const {properties, uid} = data.result;
        console.log("response", properties.url);
        console.log("uid", uid);
        setModel(properties, uid);
        console.log("details", model);
        setLoading(true);
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
          <div className="container-fluid col-xs-12 col-lg-8 mt-2 min-vh-100 modelDetailsPageContainer ">
            <div className="row"> 
                <div className="col-xs-12 col-lg-6 my-4 mx-auto">
                      <Card className="text-bg-light mb-5">
                          <Card.Body className="mt-5 mb-4 fs-5 mx-auto">
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
                          <Card.Link href="/models">Back to models' list.</Card.Link>
                          <Card.Link> <Link to = {`/modelfilms/${model.uid}`}
                                            state = {{url: model.films}}>
                                             {model.name} films.
                                      </Link>
                          </Card.Link>
                        
                          </Card.Body>
                      </Card>
                  </div>
            </div>
          </div> 
        ) : (
          <LoadingSpinner />
        )
      }
    </>
  )
}

export default ModelDetailsPage;