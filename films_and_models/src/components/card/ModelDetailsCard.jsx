import React,{ useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Card from "react-bootstrap/Card";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";



const ModelDetailsCard = () => {

  const {url} = useLocation().state;
  const [model, setModel] = useState({});
  const [uid, setUid] = useState("");
  const [filmUrls, setFilmUrls] =useState([]);
  const [Loading, setLoading] = useState(false);


  const modelData = async () => {
    try{
        const res = await fetch(url);
        const data = await res.json();
        const {properties, uid} = data.result;
        setModel(properties);
        setUid(uid);
        getModelFilmsUrl(uid);
        setLoading(true);
    }catch(err){
        console.error(err)
    }
  };

  const getModelFilmsUrl = async (uid) => {
    try{
      const res = await fetch(`https://swapi.dev/api/people/${uid}`);
      const data = await res.json();
      setFilmUrls(data.films); 
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
          <div className="container-fluid col-xs-12 col-lg-8 mt-2 min-vh-100 pb-5">
             <div className="row pb-2 allModelsInAFilmTitle"><h3 className="d-flex align-item-center justify-content-center text-secondary fs-4 fw-bold">Model:<span className="ms-3 text-nowrap">{model.name}</span></h3></div>
            <div className="row"> 
                <div className="col-xs-12 col-md-6 my-4 mx-auto">
                      <Card className="text-bg-light mb-5">
                          <Card.Body className="mt-3 mb-3 fs-5 mx-auto">
                          <Card.Text className="mb-4" >
                            <span className="fs-5"> Physical features of <span>{model.name}</span></span>
                          </Card.Text>
                          <Card.Subtitle className="mb-3 fs-5 text-muted"><span>Birth Year:</span><span className="ms-3">{model.birth_year}</span></Card.Subtitle>
                          <Card.Subtitle className="mb-3 fs-5 text-muted"><span>Gender:</span><span className="ms-3">{model.gender}</span></Card.Subtitle>
                          <Card.Subtitle className="mb-3 fs-5 text-muted"><span>Height:</span><span className="ms-3">{model.height}</span></Card.Subtitle>
                          <Card.Subtitle className="mb-3 fs-5 text-muted"><span>Mass:</span><span className="ms-3">{model.mass}</span></Card.Subtitle>
                          <Card.Subtitle className="mb-3 fs-5 text-muted"><span>Skin Color:</span><span className="ms-3">{model.skin_color}</span></Card.Subtitle>
                          <Card.Subtitle className="mb-3 fs-5 text-muted"><span>Hair Color:</span><span className="ms-3">{model.hair_color}</span></Card.Subtitle>
                          <Card.Subtitle className="mb-5 fs-5 text-muted"><span>Eye Color:</span><span className="ms-3">{model.eye_color}</span></Card.Subtitle>
                          <Card.Link href="/models" className="text-decoration-none"><BsArrowLeft /><span className="ms-2">Back to models' list</span></Card.Link>
                          <Card.Link> <Link to = {`/modelfilms/${uid}`}
                                            state = {{urls: filmUrls}}>
                                            <span className="me-2">{model.name} films</span><BsArrowRight />
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
};

export default ModelDetailsCard;