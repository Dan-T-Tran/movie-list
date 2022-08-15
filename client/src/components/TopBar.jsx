import React from 'react';


class TopBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id='topBar'>
        <h1 className='logo'>MyMovieList</h1>
      </div>
    )
  }
}

export default TopBar;