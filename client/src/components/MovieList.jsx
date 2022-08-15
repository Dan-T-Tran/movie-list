import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';
import MovieEntryDetails from './MovieEntryDetails.jsx';
import NoMoviesFound from './NoMoviesFound.jsx';
import Watchers from './Watchers.jsx';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div id='functionalSquare'>
      <Watchers
      watchStatus = {this.props.watchStatus}
      toggleWatch = {this.props.toggleWatch}
      />
      <div id='movieList'>
        {this.props.movies.map((movie) =>
          <MovieListEntry
          key = {movie.id}
          movie = {movie}/>
        )}
      </div>
    </div>
    )
  }
}

export default MovieList;