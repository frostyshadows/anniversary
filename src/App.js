import React, { Component } from 'react';
import Days from './components/Days.jsx';
import StatsGrid from './components/StatsGrid.jsx';
import GithubLink from './components/GithubLink.jsx';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Days/>
        <StatsGrid/>
        <GithubLink/>
      </div>
    );
  }
}

export default App;