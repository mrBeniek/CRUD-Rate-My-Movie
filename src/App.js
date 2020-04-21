import './App.css';
import React, { Component } from 'react';
import { Form } from './Components/Form';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      index: '',
    }
  }

  handleAdd = (data) => {
    this.setState({
      data: data
    })
  }

  render() {
    return (
      <div id="main">
        <div id="title" className="flex-middle">Rate My Movie</div>
        <Form 
        handleAdd={this.handleAdd}
        data={this.state.data}
         />
      </div>
    )
  }
}


export default App



