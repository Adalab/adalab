import React, { Component } from 'react';
import Groups from './Groups';
import WeList from '../Components/WeList';


class AppPrivate extends Component {
  render() {
    return (
      <div className="App">
         <WeList/>
      </div>
    );
  }
}

export default AppPrivate;