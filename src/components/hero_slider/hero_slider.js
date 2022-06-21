import apiConfig from "../../api/axiosInstance";
import React, { useState, useEffect } from 'react';
//import SwiperCore, { Autoplay } from 'swiper';
//import { Swiper, SwiperSlide } from 'swiper/react';

const HeroSlide = () => {

   // SwiperCore.use([Autoplay]);
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
           <div className='hero-slide'>
          
           </div>
        );
    }
    export default HeroSlide;