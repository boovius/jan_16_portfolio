import React from 'react';
//import FontAwesome from 'react-fontawesome';

import './stylesheets/links.scss';

export default class Link extends React.Component {
  render () {
    return (
      <a href={this.props.link.url} target="_blank" className='link'>
        <div>{this.props.link.name}</div>
      </a>
    )
  }
}

