import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import "./BsTable.css";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";

const BsFilmsTable = () => {

    const [films, setFilms] = useState([]);
    const [Loading, setLoading] = useState(false);

    const url = "https://swapi.dev/api/films/";

    const LoadFilmsData = async () => {
        try{
            const res = await fetch(url);
            const data = await res.json();
            let v = data.results;
            v = v.sort((a, b) => {
              console.log(a.episode_id, b.episode_id);
              return a.episode_id < b.episode_id;
            });
            console.log(v);
            setFilms(v);
            setLoading(true);
        }catch(err){
            console.error(err)
        }
    };
 
 // To trigger querry when the page loads, the useEffect hook is used
 
    useEffect(() => {
      LoadFilmsData();
    }, []);

  let filmInfo = (film, index) => {
    return (
      <tr key={index}>
        <td>{film.episode_id}</td>
        <td>{film.title}</td>
        <td>{film.director}</td>
        <td>{film.producer}</td>
        <td>{film.release_date}</td>
        <td>
            <Link 
                to = {`/films/${film.episode_id}`}
                state = {{urls: film.characters}}>
                  <button type="button" class="btn btn-success">
                      Details
                  </button>
            </Link>
        </td>
      </tr>
    )
  };

  return (
    <>
         <div className="container col-xs-12 col-lg-8 min-vh-100 bsTableContainer my-3" >
            {Loading ? (
            <Table striped bordered hover>
              <thead>
                <tr >
                  <th>Episode ID</th>
                  <th>Film Title</th>
                  <th>Film Director</th>
                  <th>Film Producer</th>
                  <th>Film Release Date</th>
                  <th>Film Details</th>
                </tr>
              </thead>
              <tbody>
                {films.map(filmInfo)}
              </tbody>
            </Table>
            ) : (
              <LoadingSpinner />
            )
          }
        </div> 
    </>

  )
};

export default BsFilmsTable;