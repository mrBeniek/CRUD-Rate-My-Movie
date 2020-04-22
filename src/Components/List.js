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
        // first we check if we're in "filtered mode"
        if (this.props.filteredData !== null) {
            
            let data = this.props.filteredData;
            let refUpdate = [data[0].movie, data[0].rating];
            let filteredIndex = this.props.filteredIndex;

            this.props.handleEdit(filteredIndex, refUpdate)

        } else {
            let data = this.props.data[index];
            let refUpdate = [data.movie, data.rating]
    
            this.props.handleEdit(index, refUpdate)
        }
        
    }

    render() {

        // checks if data has been filtered

        const DATACHOICE = this.props.filteredData !== null ? this.props.filteredData : this.props.data

        // fills the list with new items

        const DATA = DATACHOICE.map( (val, index) => 
            <div key={index} className="list">
            {val.movie} - {val.rating}
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