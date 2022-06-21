import './App.scss'
import Header from "./components/header/header";
import MovieDetails from "./components/movie/movie_details";
import Movie from  "./components/movie/movie";
import Home from  "./components/home/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from './components/Footer/footer';


function App() {
  return (
    <>
    <Router>
    <Header/>
    <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/movie" exact component={Movie} />
    <Route path="/details/:id" exact component={MovieDetails} />
    </Switch>
<Footer/>
    </Router>

    </>
  );
}

export default App;
