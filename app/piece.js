import React from 'react';

import './stylesheets/piece.scss';

let backgroundImage = require('./images/streetbeat.png');
let image = {backgroundImage: 'url(' + backgroundImage + ')'}

export default class Piece extends React.Component {
  render () {
    return (
      <div className='piece'>
        <div style={image} className='piece-thumbnail'>
        </div>
        <div className='piece-title'>
          <h1>{this.props.piece.name}</h1>
        </div>
      </div>
    )
  }
}

