import React from 'react';
import MovieEntryDetails from './MovieEntryDetails.jsx';



class MovieListEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var watched = this.props.movie.watched === 1 ? 'Watched!' : 'Unwatched...';
    var watchedStyle = {
      backgroundColor: this.props.movie.watched === 1 ? 'green' : 'red'
    };
    return (
    <div className='movieEntry'>
      <h2 className='movieTitle'>{this.props.movie.title}</h2>
      <button style={watchedStyle} className='entryWatchButton'>{watched}</button>
      <button className='entryDeleteButton'>Delete</button>
    </div>
    )
  }
}

export default MovieListEntry;