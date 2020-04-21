import React, { Component } from 'react'

export class Form extends Component {


    // adding new items to the List

    handleAdd = (event) => {
        event.preventDefault();

        let data = this.props.data;
        let movie = this.refs.movie.value;
        let rating = this.refs.rating.value;

        // first we check if we're in edit mode (if not first)

        if (this.props.checkEdit === false) {

            let storage = {
                movie,
                rating
              }
        
              data.push(storage);
        }

        // if we're in edit mode then:

        else {
            let index = this.props.index;
            data[index].movie = movie;
            data[index].rating = rating;

            this.props.editDisable()
        }

        

          this.props.handleUpdate(data);

          this.refs.formCont.reset()
    }

    
    render() {

        // check if in "edit mode", if yes - change refs values

        if (this.props.checkEdit === true) {
            this.refs.movie.value = this.props.refUpdate[0];
            this.refs.rating.value = this.props.refUpdate[1];
        }

        return (
            <div>
                <form id="form-cont" ref="formCont">
                <input className="input-field" type="text" ref="movie" placeholder="Insert Movie" />
                <input className="input-field" type="text" ref="rating" placeholder="Insert Rating" />
                <button className="button-add" onClick={this.handleAdd}>Add</button>
                </form> 
            </div>
        )
    }
}
