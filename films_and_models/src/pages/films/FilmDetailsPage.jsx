import React,{ useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./FilmDetailsPage.css";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";


const FilmDetailsPage = () => {

    const {urls} = useLocation().state;
    const [Loading, setLoading] = useState(false);
    const [spec, setSpec] = useState([]);
  
    const filmData = async () => {
      try{
        let models = await Promise.all(urls.map(url => fetch(url)));
        let nestedCharacterUrl = await Promise.all(models.map(model => model.json()))
        setSpec(nestedCharacterUrl);
        setLoading(true);
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
          <div className="container-fluid col-xs-12 col-lg-8 mt-2 min-vh-100 filmDetailsPageContainer">
            <div className="row">
            <div className="col-xs-12 col-lg-6 my-4 mx-auto">
                  <Card className="text-bg-light mb-5">
                      <Card.Body className="mt-5 mb-4 fs-5 mx-auto">
                      <Card.Title  className="mb-4"><h2>All models in this film.</h2></Card.Title>
                      <Card.Subtitle className="mb-3 text-muted"><span className="ms-3">{spec.map((m) => <h5>Model Name: <a href="/films" className="filmModels ms-3">{m.name}</a> </h5>)}</span></Card.Subtitle>
                      <Card.Link href="/films">Back to films' list</Card.Link>
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

export default FilmDetailsPage;