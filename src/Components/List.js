import React, { Component } from 'react';
import { Button } from 'antd';

export class List extends Component {

    // deletes items from the list

    handleDelete = (index) => {
        let data = this.props.data;
        // first we check if we're in "filtered mode"
        if (this.props.filteredData !== null) {
            let filteredIndex = this.props.filteredIndex;
            data.splice( filteredIndex, 1 );
            this.props.resetFilter()

        } else {
    
            data.splice( index, 1 );
        }
    
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
            <div key={index} className="list-data-single">
            <div>{val.movie}</div> <div className="right-margin">{val.rating}</div>
            </div>
        )

        const BUTTONS = DATACHOICE.map( (val, index) => 
        <div key={index} className="list-buttons-single flex-middle">
        <Button className="button-delete" type="primary" danger onClick={() => this.handleDelete(index)}>Delete</Button>
        <Button className="button-edit" type="default" onClick={() => this.handleEdit(index)}>Edit</Button>
        </div>
    )

        return (
        <div id="list-main">
            <div id="list-title">
                <div>TITLE</div>
                <div>RATING</div>
            </div>
            <div id="list-cont" >
                <div id="list-data">
                {DATA}
                </div>
                
                <div id="list-buttons" className="flex-middle">
                {BUTTONS}
                </div>
                
            </div>
        </div>
            
        )
    }
}