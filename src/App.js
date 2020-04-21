import './App.css';
import React, { Component } from 'react';
import { Form } from './Components/Form';
import { List } from './Components/List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      index: '',
      formReset: 0,
    }
  }

  handleUpdate = (data) => {
    this.setState({
      data: data
    })
  }
 

  render() {
    return (
      <div id="main">
        <div id="title" className="flex-middle">Rate My Movie</div>
        
        <Form 
          handleUpdate={this.handleUpdate}
          data={this.state.data}
          formReset={this.state.formReset}
         />

         <List 
          handleUpdate={this.handleUpdate}
          handleReset={this.handleReset}
          data={this.state.data}
         />
      </div>
    )
  }
}


export default App



