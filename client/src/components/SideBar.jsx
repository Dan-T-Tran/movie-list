import React from 'react';
import Input from './Input.jsx';
// import Sorters from './Sorters.jsx';

class SideBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id='sideBar'>
        <Input
        enterMovie = {this.props.enterMovie}
        searchMovies = {this.props.searchMovies}
        />
      </div>
    )
  }
}

export default SideBar;