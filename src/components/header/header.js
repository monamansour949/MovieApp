import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from 'react-router-dom'
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import apiConfig from "../../api/axiosInstance";

const Header = () => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');

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

    // const movieSearch = props =>{

    // }

 const serchMovie = async (e) => {
        e.preventDefault();
        console.log('You clicked submit');

        try {
            //const url = `${apiConfig}/search/movie=${movies.title}}`;
            const url=`https://api.themoviedb.org/3/search/movie?api_key=f5d806ab74d3be2a2db2f76908165f8b&search=${movies.title}`;
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setMovies(data.results);
        }
        catch (e) {
            console.log(e);
        }
    } 

    const changeHandler = (e) => {
        setSearch(e.target.value);
        console.log('submit');
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home" style={{ textDecoration: "none", color: "red", fontWeight: "bold" , marginLeft :5}}>NETFLIX</Navbar.Brand>
                <Nav className="me-auto">
                    <Link to="/" style={{ textDecoration: "none", color: "white", fontWeight: "bold" }} >Home</Link>

                    <Link to="/movie" className="mx-3" style={{ textDecoration: "none", color: "white", fontWeight: "bold" }}>Movie</Link>

                </Nav>
                <Form className="d-flex" onSubmit={serchMovie}>
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        name = "search"
                        value={search} onChange={changeHandler}
                    />
                    <Button variant="outline-light" >Search</Button>
                </Form>
            </Container>
        </Navbar>
    )
}

export default Header;