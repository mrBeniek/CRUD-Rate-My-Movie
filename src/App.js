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
      checkEdit: false,
      refUpdate: []
      
    }
  }

  handleUpdate = (data) => {
    this.setState({
      data: data
    })
  }

  handleEdit = (index, refUpdate) => {
    this.setState({
      checkEdit: true,
      index: index,
      refUpdate: refUpdate
    })
  }

  editDisable = () => {
    this.setState({
      checkEdit: false
    })
  }
 

  render() {
    return (
      <div id="main">
        <div id="title" className="flex-middle">Rate My Movie</div>
        
        <Form 
          handleUpdate={this.handleUpdate}
          editDisable={this.editDisable}
          data={this.state.data}
          index={this.state.index}
          checkEdit={this.state.checkEdit}
          refUpdate={this.state.refUpdate}
         />

         <List 
          handleUpdate={this.handleUpdate}
          handleEdit={this.handleEdit}
          data={this.state.data}
         />
      </div>
    )
  }
}


export default App



