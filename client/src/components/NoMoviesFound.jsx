import React from 'react';

class NoMoviesFound extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='nothingness'>
        No movies by that name were found :c
      </div>
    )
  }
}

export default NoMoviesFound;