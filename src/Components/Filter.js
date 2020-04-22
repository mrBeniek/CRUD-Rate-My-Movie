import React, { Component } from 'react';

export class Filter extends Component {

    // Search for selected movie

    handleFilter = (event) => {
        event.preventDefault();

        let data = this.props.data;
        let filter = this.refs.filter.value;
        let filteredIndex = '';

        let newData = data.filter( (val, index) => {
            if (val.movie === filter) {
                filteredIndex = index;
            }
            return val.movie === filter
        }
            
        )

        this.props.handleFilter(newData, filteredIndex)
    }

    render() {
        return (
            <div>
                <form id="form-filter" className="top-margin" ref="formFilter">
                    <input className="input-field" type="text" ref="filter" placeholder="Search Movie" />
                    <button className="button-filter" onClick={this.handleFilter}>Search</button>
                </form>
            </div>
        )
    }
}
