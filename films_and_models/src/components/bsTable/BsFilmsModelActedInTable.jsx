import React,{ useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";
import Table from "react-bootstrap/Table";


const BsFilmsModelActedInTable = () => {

  const {urls} = useLocation().state;
  const [filmsIn, setFilmsIn] = useState({});
  const [Loading, setLoading] = useState(false);

  const filmsInData = async () => {
    try{
      let allFilms = await Promise.all(urls.map(url => fetch(url)));
      let nestedFilmsUrl = await Promise.all(allFilms.map(allFilm => allFilm.json()))
      setFilmsIn(nestedFilmsUrl);
      setLoading(true);
      console.log(nestedFilmsUrl);
    }catch(err){
        console.error(err)
    }
  };

  useEffect(() => {
    filmsInData();
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
             {filmsIn.map(filmInfo)}
           </tbody>
         </Table> 
        ) : (
          <LoadingSpinner />
        )
      }
    </>
  )
}

export default BsFilmsModelActedInTable;