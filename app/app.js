import React from 'react';
import ReactDOM from 'react-dom';

//componenets
import Piece from './piece.js'
import Link from './link.js'

//data
import PiecesData from './data.js'
import LinksData from './links_data.js'
import BioData from './bio_data.js'

//css
import './stylesheets/normalize.css';
import './stylesheets/main.scss';

let pieces = PiecesData.map((piece, i) => {
  return <Piece key={i} piece={piece}/>;
})

let pic = require('./images/meMugged.jpg');

let links = LinksData.map((link, i) => {
  return <Link key={i} link={link} />;
})

let App = React.createClass({
  render () {
    return (
      <div>
        <div id='header' className='header'>
          <div className='header-title'>
            <div className='header-heading'>joshua c. book / Boovius</div>
            <div className='header-subheading'> Software Development Portfolio</div>
          </div>
        </div>
        <div id='main' className='main'>
          <div id='pieces' className='layout pieces pad-sides'>
            {pieces}
          </div>
          <div id='bio-and-links' className='layout pad-sides'>
            <div id='bio-and-pic'>
              <div id='pic'>
                <img src={pic}/>
              </div>
              <div id='bio'>
                <p>{BioData}</p>
              </div>
            </div>
            <div id='links' className='links'>
              {links}
            </div>
          </div>
        </div>
        <div id='footer' className='footer'>
          site built by Boovius in reactjs, es6, css3 trans, flexbox, webpack, babel - 01/2016
        </div>
      </div>
    )
  }
});

ReactDOM.render(
  <App/>,
  document.getElementById('container')
);

