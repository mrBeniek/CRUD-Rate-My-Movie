import React, { Component } from 'react';

export class List extends Component {

    // deletes items from the list

    handleDelete = (index) => {
        let data = this.props.data;
    
        data.splice( index, 1 );
    
        this.props.handleUpdate(data)
    
      }

    // enters "edit mode"

    handleEdit = (index) => {
        let data = this.props.data[index];
        let refUpdate = [data.movie, data.rating]

        this.props.handleEdit(index, refUpdate)
    }

    render() {

        // fills the list with new items

        const DATA = this.props.data.map ( (val, index) => 
            <div key={index} className="list">
            {val.movie}, {val.rating}
            <button className="button-delete" onClick={() => this.handleDelete(index)}>Delete</button>
            <button className="button-edit" onClick={() => this.handleEdit(index)}>Edit</button>
            </div>
        )

        return (
            <div id="list-cont">
            
                {DATA}
                
            </div>
        )
    }
}