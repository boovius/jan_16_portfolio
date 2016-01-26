import React from 'react';

import './stylesheets/piece.scss';

export default class Piece extends React.Component {
  render () {
    return (
      <div className='piece'>
        <div className='piece-thumbnail'/>
        <div className='piece-title'>
          <h1>{this.props.piece.name}</h1>
        </div>
      </div>
    )
  }
}
