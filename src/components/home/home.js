import Carousel from "react-bootstrap/Carousel";
import React, { useState, useEffect } from 'react';
import apiConfig from '../../api/axiosInstance';



const Home = () => {
    const [movies, setMovies] = useState([]);

    const Img_URL = "https://image.tmdb.org/t/p/w500/";

    /*      const LoaderState= useSelector((state)=>state.loader.isLoading)  */

    useEffect(() => {

        apiConfig

            .get("/movie/popular")

            .then((res) => {

                console.log(res.data.results);

                setMovies(res.data.results);

            })

            .catch((err) => {

                console.log(err);

            });

    }, []);

    return (
        <div  style={{ margin: "auto" }}>
            <div style={{justifyContent: "center" }}>



                <Carousel >
                    {movies.map((mov) => {
                        return (
                            <Carousel.Item interval={1000}>
                                <img
                                    className="d-block w-100"
                                    src={Img_URL + mov.backdrop_path}
                                    alt="First slide"
                                    style={{ height:550}}
                                />

                                <Carousel.Caption>
                                    <h3>{mov.title}</h3>
                                   
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })}
                </Carousel>

            </div>
        </div>

    );
    
   
}
export default Home;

