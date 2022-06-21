import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import apiConfig from "../../api/axiosInstance";
//import './movie_details.scss'

const MovieDetails = (props) => {
 
    console.log(props);
    const params = useParams();
    const imageURL = "https://image.tmdb.org/t/p/w500/";

    const [movie, setMovie] = useState({});
    useEffect(() => {
        apiConfig
            .get(`/movie/${params.id}`)
            .then((res) => {
                console.log(res.data);
                setMovie(res.data);
            })
            .catch((err) => console.log(err));
    }, []);
    
    return (
        <>


<Card style={{width:"750px",height:"600px",margin:"auto",marginTop:"2%"}}>
  <Card.Img variant="top" src={imageURL+movie.backdrop_path} alt={movie.title} style={{width:"750px"}} />
  <Card.Body>
    <Card.Title style={{color:"red"}}>{movie.title}</Card.Title>
    <Card.Text>
   
<p>
    {movie.overview}
    </p>
    <h6>Popularity : {movie.popularity}</h6>
    <h6>Language : {movie.original_language}</h6>
    <h6>Release : {movie.release_date}</h6>

    </Card.Text>
    
   
  </Card.Body>
</Card>

        </>

    );
};

export default MovieDetails;