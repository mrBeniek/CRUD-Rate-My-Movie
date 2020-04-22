import React, { Component } from 'react'
import { Button } from 'antd';

export class Form extends Component {


    // adding new items to the List

    handleAdd = (event) => {
        event.preventDefault();


        let data = this.props.data;
        let filteredData = this.props.filteredData;
        let filteredIndex = this.props.filteredIndex;
        let movie = this.refs.movie.value;
        let rating = this.refs.rating.value;

        // we check if we're in edit mode (if not first)

        if (this.props.checkEdit === false) {

            // we reset filter just in case

            this.props.resetFilter()

            let storage = {
                movie,
                rating
              }
        
              data.push(storage);
        }

        // if we're in edit mode then:

        else {

            // we check if we're in "filtered mode"

            if (filteredData !== null) {
                filteredData.movie = movie;
                filteredData.rating = rating;
                data[filteredIndex].movie = movie;
                data[filteredIndex].rating = rating;


            } else {
                let index = this.props.index;
                data[index].movie = movie;
                data[index].rating = rating;
            }
        
            this.props.editDisable()
        }

          this.props.handleUpdate(data);

          this.refs.formCont.reset()
    }

    render() {

        let btnChange = "Add";

        // check if in "edit mode", if yes - change refs values

        if (this.props.checkEdit === true) {
            this.refs.movie.value = this.props.refUpdate[0];
            this.refs.rating.value = this.props.refUpdate[1];
            btnChange = "Edit";
        }

        return (
            <div>
                <form id="form-cont" ref="formCont">
                <input className="input-field-text" type="text" ref="movie" placeholder="Insert Movie" />
                <input className="input-field-number" type="number" ref="rating" required min="1" max="10" placeholder="Rating" />
                <Button className="button-add" onClick={this.handleAdd} type="dashed">{btnChange}</Button>
                </form> 
            </div>
        )
    }
}
