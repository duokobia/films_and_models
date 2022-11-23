import React, { useState, useEffect } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import './BsTable.css';

function BsTable() {

    const [models, setModels] = useState([]);
    const url = "https://www.swapi.tech/api/people/";

    const LoadModelsData = async () => {
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setModels(data.results);
        }catch(err){
            console.error(err)
        }
    };
 
 // To trigger querry when the page loads, the useEffect hook is used
 
    useEffect(() => {
        LoadModelsData();
    }, []);

  let modelInfo = (models, index) => {
    return (
      <tr key={index}>
        <td>{models.uid}</td>
        <td>{models.name}</td>
        <td><a href={models.url}>
              <button type="button" class="btn btn-success">
                View Details
              </button>
            </a>
        </td>
      </tr>
    )
  };

  return (
    <>
    
          <div className="container col-xs-12 col-lg-8 bsTableContainer my-3" >
              <ReactBootStrap.Table striped bordered hover>
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
            </ReactBootStrap.Table>
        </div> 
    
    </>

  )
};

export default BsTable;