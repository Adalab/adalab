import React, { Component } from 'react';
import AppPublic from './public/AppPublic';
import AppPrivate from './private/AppPrivate';

class App extends Component {
  render() {
    return (
      <div className="container">
        <AppPrivate/>
        {/* <AppPublic/> */}
      </div>
    );
  }
}

export default App;
