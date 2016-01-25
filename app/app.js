import React from 'react';
import ReactDOM from 'react-dom';

var App = React.createClass({
  render () {
    return (
      <div id='header'>
        hello world
      </div>
      <div id='pieces'>
        hello world
      </div>
      <div id='bio-and-links'>
        <div id='bio'>
        </div>
        <div id='links'>
        </div>
      </div>
    )
  }
});

ReactDOM.render(
  <App/>,
  document.getElementById('container')
);

