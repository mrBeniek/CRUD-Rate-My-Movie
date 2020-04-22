import './App.css';
import React, { Component } from 'react';
import { Form } from './Components/Form';
import { List } from './Components/List';
import { Filter } from './Components/Filter';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      filteredData: null,
      index: '',
      filteredIndex: '',
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

  handleFilter = (newData, filteredIndex) => {
    this.setState({
      filteredData: newData,
      filteredIndex: filteredIndex
    })
  }

  resetFilter = () => {
    this.setState({
      filteredData: null, 
      filteredIndex: ''
    })
  }
 

  render() {
    return (
      <div id="main">
        <div id="title" className="flex-middle">Rate My Movie</div>
        
        <Form 
          handleUpdate={this.handleUpdate}
          editDisable={this.editDisable}
          resetFilter={this.resetFilter}
          data={this.state.data}
          filteredData={this.state.filteredData}
          filteredIndex={this.state.filteredIndex}
          index={this.state.index}
          checkEdit={this.state.checkEdit}
          refUpdate={this.state.refUpdate}
         />

         <List 
          handleUpdate={this.handleUpdate}
          handleEdit={this.handleEdit}
          resetFilter={this.resetFilter}
          data={this.state.data}
          filteredData={this.state.filteredData}
          filteredIndex={this.state.filteredIndex}
         />

         <Filter
          handleUpdate={this.handleUpdate}
          handleFilter={this.handleFilter}
          resetFilter={this.resetFilter}
          data={this.state.data}
         />
      </div>
    )
  }
}


export default App



