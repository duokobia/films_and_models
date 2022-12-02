import React,{ useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";
import "./BsCard.css";
import { BsArrowLeft } from "react-icons/bs";


const AllModelsInAFilmCard = () => {

    const {urls, crawl} = useLocation().state;
    const [Loading, setLoading] = useState(false);
    const [spec, setSpec] = useState([]);
    const {title} = useParams();
  
    const filmData = async () => {
      try{
        let models = await Promise.all(urls.map(url => fetch(url)));
        let nestedCharacterUrl = await Promise.all(models.map(model => model.json()))
        setSpec(nestedCharacterUrl);
        setLoading(true);
      }catch(err){
          console.error(err)
      }
    };

    const getIdFromUrl = (url) => {
      let arr = url.trim().split("/");
      return arr[arr.length - 2];
      
    };
  
    useEffect(() => {
        filmData();
    }, [urls]);

  return (
    <>
    {Loading ? ( 
          <div className="container-fluid col-xs-12 col-lg-8 mt-2 min-vh-100 allModelsInAFilmContainer">
            <div className="row allModelsInAFilmTitle">
                <div className="col-xs-12 col-lg-10 text-nowrap mx-auto">
                    <h3 className="d-flex align-item-center justify-content-center text-secondary fs-4 fw-bold">Title:<span className="ms-3">{JSON.parse(JSON.stringify(title))}</span></h3>
                </div>
              </div>
            <div className="row" id="scroll-container">
                <span id="scroll-text">{JSON.parse(JSON.stringify(crawl))}</span>
            </div>
            <div className="row">
            <div className="col-xs-12 col-md-6 my-4 mx-auto">
                  <Card className="text-bg-light mb-5">
                      <Card.Body className="mt-3 mb-3 fs-5 mx-auto">
                      <Card.Subtitle className="mb-3 text-muted"><span className="ms-3">{spec.map((m) => <h5>
                        Model Name: 
                        <Link to = {`/models/${getIdFromUrl(m.url)}`} 
                              state = {{url: `https://www.swapi.tech/api/people/${getIdFromUrl(m.url)}`}} 
                              className="text-decoration-none ms-3">{m.name}
                        </Link> </h5>)}</span>
                        </Card.Subtitle>
                      <Card.Link href="/films" className="text-decoration-none"><BsArrowLeft /><span className="ms-2">Back to films' list</span></Card.Link>
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

export default AllModelsInAFilmCard;