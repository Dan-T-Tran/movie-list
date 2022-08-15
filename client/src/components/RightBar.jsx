import React from 'react';
var fillerText = require('./text.js');


class RightBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id='rightBar'>
        <h3>Filler News!</h3>
        <p>{fillerText.firstPar}</p>
        <h3>More Filler News!</h3>
        <p>{fillerText.secondPar}</p>
        <h3>Can't Get Enough Filler!</h3>
        <p>{fillerText.thirdPar}</p>
      </div>
    )
  }
}

export default RightBar;