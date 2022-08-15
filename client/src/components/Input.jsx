import React from 'react';




class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entryQuery: '',
      searchQuery: ''
    }
  }

  render() {
    var changeQuery = (query) => {
      if(query.target.name === 'entry') {
        this.setState({
          entryQuery: query.target.value
        });
      } else {
        this.setState({
          searchQuery: query.target.value
        });
      }
    };

    var clicked = '';
    var clicker = (query) => {
      clicked = query.target.name;
    }

    var clickCheck = () => {
      event.preventDefault();
      // console.log(clicked);
      if(clicked === 'entry') {
        // console.log('you got it!')
        if (this.state.entryQuery !== '') {
          this.props.enterMovie(this.state.entryQuery);
          this.setState({
            entryQuery: ''
          });
        }
      } else {
        // console.log('oh')
        this.props.searchMovies(this.state.searchQuery);
        this.setState({
          searchQuery: ''
        });
      }
      // console.log(this.state.entryQuery);
      event.target.reset();
      // console.log(this.state.entryQuery);
    }

    return (
    <div>
      <form className='entryForm' onSubmit={clickCheck}>
        <h3>Enter a movie</h3>
        <input className='textInput' type='text' placeholder='Enter Movie Name Here' name='entry' onChange={changeQuery}></input>
        <input className='submitButton' type='submit' name='entry' value='Submit' onClick={clicker}/>
        <h3>Search for a movie</h3>
        <input className='textInput' type='text' placeholder='Search Movie Name Here' name='search' onChange={changeQuery}></input>
        <input className='submitButton' type='submit' name='search' value='Search' onClick={clicker}/>
      </form>
    </div>
    )
  }
}

export default Input;