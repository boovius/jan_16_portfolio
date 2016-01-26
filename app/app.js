import React from 'react';
import ReactDOM from 'react-dom';

import Piece from './piece.js'

import './stylesheets/normalize.css';
import './stylesheets/main.scss';

const PiecesData = [
  {name: 'StreetBeat'},
  {name: 'Enrichual'},
]

let pieces = PiecesData.map((piece, i) => {
  return <Piece piece={piece}/>;
})

let App = React.createClass({
  render () {
    return (
      <div>
        <div id='header' className='header'>
          BOOVIUS PROJECTS
        </div>
        <div id='main' className='main'>
          <div id='pieces' className='layout pad-sides'>
            {pieces}
          </div>
          <div id='bio-and-links' className='layout pad-sides'>
            <div id='bio'>bio</div>
            <div id='links'/>
          </div>
        </div>
      </div>
    )
  }
});

ReactDOM.render(
  <App/>,
  document.getElementById('container')
);

