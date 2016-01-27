import React from 'react';
import ReactDOM from 'react-dom';

//componenets
import Piece from './piece.js'
import Link from './link.js'

//data
import PiecesData from './data.js'
import LinksData from './links_data.js'

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
            <div className='header-subheading'> Software Developer Portfolio</div>
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
                <p>Joshua Book is a full-stack web developer currently living in and from NY.  A wanderer and journery, Josh loves to travel the world, meet new people, and experience different cultures.  Former filmmaker, Josh's goals are to create innovative technology that empowers people all over.</p>
              </div>
            </div>
            <div id='links' className='links'>
              {links}
            </div>
          </div>
        </div>
        <div id='footer' className='footer'>
          site built by Boovius in reactjs, es6, css3 trans, flexbox, webpack, babel
        </div>
      </div>
    )
  }
});

ReactDOM.render(
  <App/>,
  document.getElementById('container')
);

