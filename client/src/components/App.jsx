// var Promise = require('bluebird');

import React from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import Input from './Input.jsx'; //Used in sideBar, may take out?
import Watchers from './Watchers.jsx'; //Used in movieList, may take out?
import TopBar from './TopBar.jsx';
import SideBar from './SideBar.jsx';
import RightBar from './RightBar.jsx';

var parse = require('./Parse.js');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.searchMovies = this.searchMovies.bind(this);
    this.enterMovie = this.enterMovie.bind(this);
    this.toggleWatch = this.toggleWatch.bind(this);

    this.state = {
      movies: [],
      filteredMovies: [],
      currentSearch: '',
      watchStatus: 'all'
    };
  }

  //////////////////////////////////////////////////////
  // Initialization
  ////////////////////
  componentDidMount() {
    parse.getAll()
    .then((result) => {
      this.setState({
        movies: result.data,
        filteredMovies: result.data
      });
    })
  }
  ///////////////////////////////////////////////////////
  // Search functionality
  //////////////////////

  searchMovies = function(query) {
    parse.getAll()
    .then((result) => {
      var tempMovieList = [];
      for (var movie of result.data) {
        if (movie.title.toLowerCase().includes(query.toLowerCase()) && (movie.watched === this.state.watchStatus || this.state.watchStatus === 'all')) {
          tempMovieList.push(movie);
        }
      }
      this.setState({
        filteredMovies: tempMovieList,
        currentSearch: query
      });
    })
    // return new Promise((resolve, reject) => {

    // })
  };

  //////////////////////////////////////////////////////
  // Entry fuctionality
  ///////////////////////////////////////////////

  enterMovie = function(query) {
    parse.postMovie({title: query})
    .then(this.searchMovies(''));
  };

  /////////////////////////////////////////////////////
  // Watch toggle functionality
  /////////////////////////////////////////////

  toggleWatch = function(query) {
    this.setState({
      watchStatus: query
    }, () => {console.log(this.state.watchStatus)})
  };


  render() {
    return (
      <div id='completeSquare'>
        <TopBar />
        <div id='notTopBar'>
        <SideBar
        enterMovie = {this.enterMovie}
        searchMovies = {this.searchMovies}
        />
        <MovieList
        watchStatus = {this.state.watchStatus}
        toggleWatch = {this.toggleWatch}
        movies = {this.state.filteredMovies}
        />
        <RightBar />
        </div>
      </div>
    )
  }
};

export default App;