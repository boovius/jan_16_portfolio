import React from 'react';
import merge from 'merge';

import './stylesheets/piece.scss';

export default class Piece extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hovered: false
    };
    this.toggleHover = this.toggleHover.bind(this);
  }

  toggleHover() {
    this.setState({hovered: !this.state.hovered})
  }

  render () {
    let imagePath = require('./images/' + this.props.piece.name.toLowerCase()  + '.png');
    let backgroundImage = {backgroundImage: 'url(' + imagePath + ')'}
    let imageStyles = merge(backgroundImage, {
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    });
    let captionStyles = this.state.hovered ? {visibility: 'visible'} : {visibility: 'hidden'};

    return (
      <div className='piece'
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
        >
        <div className='piece-thumbnail-container'>
          <div style={imageStyles} className='piece-thumbnail'/>
          <div className='piece-caption' style={captionStyles} >
            {this.props.piece.caption}
          </div>
        </div>
        <div className='piece-title'>
          <h1>{this.props.piece.name}</h1>
        </div>
      </div>
    )
  }
}

