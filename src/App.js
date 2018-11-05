import React, { Component } from 'react';
import './App.css';

import Pause from './Components/Pause/Pause';
import Routes from './routes';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      pause: false,
      reset: false
    }
  }

  toggleReset = () => {
    this.setState({
      reset: !this.state.reset
    })
  }

  togglePause = () => {
    this.setState({
      pause: !this.state.pause
    })
  }
  render() {
    return (
      <div className="App">
        <Pause togglePause={this.togglePause} toggleReset={this.toggleReset} reset={this.state.reset} pause={this.state.pause} />
        <Routes pause={this.state.pause} reset={this.state.reset}/>
      </div>
    );
  }
}

export default App;
