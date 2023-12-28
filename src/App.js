import './App.css';
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom'
import Header from './components/header/Header';
import HomePages from './home/HomePages';
import Footer from './components/footer/Footer';
import SinglePage from './components/watch/SinglePage';
import SeriesPages from './series/SeriesPages';
import MoviesPages from './movies/MoviesPages';
import SearchResults from './search/SearchResults';
import GenresDropdown from './components/genres/GenresDropDown';
import YearDropdown from './components/year/YearDropdown';

function App() {
  return (
    <>
    <Router>
      <Header/>
      <Switch>
      <Route exact path='/' component={HomePages}/>
      <Route
        exact
        path='/singlePage/:id'
        render={(props) => {
        const id = props.match.params.id;
        return <SinglePage id={id} />;
         }}
       />
      <Route exact path='/series' component={SeriesPages}/>
      <Route exact path='/movies' component={MoviesPages}/>
      <Route exact path='/search-results/:query' component={SearchResults} />
      <Route
        exact
        path='/search-results/:query'
        render={(props) => {
        const query = props.match.params.query;
        return <SearchResults query={query} />;
         }}
       />
       <Route
        exact
        path='/genres-results/:genre'
        render={(props) => {
          const genre = props.match.params.genre;
        return <GenresDropdown genre={genre} />;
         }}
       />
       <Route
        exact
        path='/year-results/:year'
        render={(props) => {
          const year = props.match.params.year;
        return <YearDropdown year={year} />;
         }}
       />
      </Switch>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
