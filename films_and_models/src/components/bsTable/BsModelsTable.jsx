import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";
import "./BsTable.css";

const BsModelsTable = () => {

    const [models, setModels] = useState([]);
    const [Loading, setLoading] = useState(false);

    const url = "https://www.swapi.tech/api/people/";

    const LoadModelsData = async () => {
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setModels(data.results);
            setLoading(true);
        }catch(err){
            console.error(err)
        }
    };
 
 // To trigger querry when the page loads, the useEffect hook is used
//  https://www.swapi.tech/api/people/1
// "https://swapi.dev/api/people/1/"


    useEffect(() => {
        LoadModelsData();
    }, []);

  let modelInfo = (models, index) => {
    return (
      <tr key={index}>
        <td>{models.uid}</td>
        <td>{models.name}</td>
        <td>
            <Link 
                to = {`/models/${models.uid}`}
                  state = {{url: models.url}}>
                 <button type="button"  class="btn btn-success">
                      Details
                      </button>
            </Link>
        </td>
      </tr>
    )
  };

  return (
         <div className="container col-xs-12 col-lg-8 min-vh-100 bsTableContainer my-3" >
            {Loading ? (<Table striped bordered hover>
              <thead>
                <tr >
                  <th>Model ID</th>
                  <th>Model Name</th>
                  <th>Model Details</th>
                </tr>
              </thead>
              <tbody>
                {models.map(modelInfo)}
              </tbody>
            </Table>
            ) : (
              <LoadingSpinner />
            )
          }
        </div> 
  )
};

export default BsModelsTable;