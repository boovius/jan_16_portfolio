import React from 'react';
import merge from 'merge';

import './stylesheets/piece.scss';

export default class Piece extends React.Component {
  render () {
    let backgroundImage = require('./images/' + this.props.piece.name.toLowerCase()  + '.png');
    let image = {backgroundImage: 'url(' + backgroundImage + ')'}
    let imageStyles = merge(image, {
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    });

    return (
      <div className='piece'>
        <div style={imageStyles} className='piece-thumbnail'/>
        <div className='piece-title'>
          <h1>{this.props.piece.name}</h1>
        </div>
      </div>
    )
  }
}

