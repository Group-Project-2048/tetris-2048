import React, { Component } from 'react';
import './App.css';

import Pause from './Components/Pause/Pause';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pause />
        {routes}
      </div>
    );
  }
}

export default App;
