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

  togglePause = () => {
    this.setState({
      pause: !this.state.pause
    })
  }
  
  toggleReset = () => {
    this.setState({
      reset: !this.state.reset
    })
  }

  render() {
    return (
      <div className="App">
        <Pause 
          togglePause={this.togglePause} 
          toggleReset={this.toggleReset} 
          pause={this.state.pause}
          reset={this.state.reset} />
        <Routes 
          pause={this.state.pause} 
          reset={this.state.reset}/>
      </div>
    );
  }
}

export default App;
