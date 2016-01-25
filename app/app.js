import React from 'react';
import ReactDOM from 'react-dom';

import './stylesheets/normalize.css';
import './stylesheets/main.scss';

var App = React.createClass({
  render () {
    return (
      <div>
        <div id='header' className='header'>
          BOOVIUS PROJECTS
        </div>
        <div id='main' className='pad-sides'>
          <div id='pieces' className='layout pad-sides'>
            Pieces
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

