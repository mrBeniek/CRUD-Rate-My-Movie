import React, { Component } from 'react'

export class Form extends Component {

    // adding new items to the List

    handleAdd = (event) => {
        event.preventDefault();

        let data = this.props.data;
        let movie = this.refs.movie.value;
        let rating = this.refs.rating.value;

        let storage = {
            movie,
            rating
          }
    
          data.push(storage);

          this.props.handleAdd(data);

          this.refs.formCont.reset()
    }

    
    render() {
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
