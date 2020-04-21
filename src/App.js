import './App.css';
import React, { Component } from 'react'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      index: '',
    }
  }

  render() {
    return (
      <div id="main">
        <div id="title" className="flex-middle">Rate My Movie</div>
        
      </div>
    )
  }
}


export default App



