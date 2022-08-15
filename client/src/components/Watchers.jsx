import React from 'react';


class Watchers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    var allStyle = {
      backgroundColor: this.props.watchStatus === 'all' ? 'green' : 'red'
    };

    var watchStyle = {
      backgroundColor: this.props.watchStatus === 1 ? 'green' : 'red'
    };

    var unwatchStyle = {
      backgroundColor: this.props.watchStatus === 0 ? 'green' : 'red'
    };

    return (
    <div className='watchButtons'>
      <button style={allStyle} className='watchButton' name='all' onClick={()=>{this.props.toggleWatch('all')}}>All</button>
      <button style={watchStyle} className='watchButton' name='watched' onClick={()=>{this.props.toggleWatch(1)}}>Watched</button>
      <button style={unwatchStyle} className='watchButton' name='unwatched' onClick={()=>{this.props.toggleWatch(0)}}>Unwatched</button>
    </div>
    )
  }
}

export default Watchers;