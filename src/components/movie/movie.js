import React, { useState, useEffect } from 'react';
import apiConfig from '../../api/axiosInstance';
//import SwiperCore, { Autoplay } from 'swiper';
import './movie.scss';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const HeroSlide = () => {

    const [movies, setMovies] = useState([]);
    const [page, setPages] = useState(1);
    const Img_URL = "https://image.tmdb.org/t/p/w500/";
    const currentPage = 1;

    
    useEffect(() => {
        apiConfig
            .get(`/movie/popular?page=${page}`)
            .then((res) => {
                console.log(res.data.results);
                setMovies(res.data.results);
            })
            .catch((err) => {
                console.log(err);
            });

    }, [page]);

    const nextPage = (pageNumber) => {
        apiConfig
            .get(`https://api.themoviedb.org/3/movie/popular?api_key=f5d806ab74d3be2a2db2f76908165f8b&page=${pageNumber}`)
            .then((res) => {
                console.log(res.data.results);
                setMovies(res.data.results, currentPage = pageNumber);
            })
            .catch((err) => {
                console.log(err);
            });


    }
    return (
        <>
            <div className="container" style={{ margin: "auto" }}>
                <div className="row row-cols-3 " style={{ marginTop: "3%", justifyContent: "center" }}>

                    {/*  {LoaderState&&  <div className="d-flex justify-content-center">
                        <div className="spinner-grow" role="status">
                        </div>
                    </div>} */}
                    {movies.map((mov) => {
                        return (
                            <div className="card m-2 p-4 col " key={mov.id} style={{ width: "350px" }}>
                                <img src={Img_URL + mov.backdrop_path} className="card-img-top " alt="..." style={{ height: "200px" }} />
                                <div className="card-body ">
                                    <h5 className="card-title">{mov.title}</h5>
                                    <p className="card-text">{mov.description}</p>

                                </div>
                                <div className='text-center'>
                                    <Link to={`/details/${mov.id}`} className="btn btn-outline-danger" style={{ width: "250px" }}>Details</Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <nav aria-label="Page navigation example p-5 mt-5" style={{margin :"auto"}}>
                <ul className="pagination justify-content-center ">
                    <li className="page-item text-danger">
                        <a className="page-link" onClick={()=>setPages(page-1)}>Previous</a>
                    </li>
                    <li className="page-item text-danger">
                        <a className="page-link" onClick={()=>setPages(page+1)}>Next</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}
export default HeroSlide;