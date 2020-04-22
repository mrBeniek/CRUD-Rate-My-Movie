import React, { Component } from 'react';
import { Button } from 'antd';

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

    handleShow = (event) => {
        event.preventDefault();

        this.props.resetFilter()
    }

    render() {

        const SHOWALL = <Button className="button-showall" onClick={this.handleShow} type="default">Show All</Button>
        const SHOWALL_OFF = <Button className="button-showall" type="primary" disabled>Show All</Button>
        return (
            <div>
                <form id="form-filter" className="top-margin" ref="formFilter">
                    <input id="filter-input-field" type="text" ref="filter" placeholder="Search Movie" />
                    <Button className="button-filter" onClick={this.handleFilter} type="primary">Search</Button>
                    {this.props.filteredData !== null ? SHOWALL : SHOWALL_OFF}
                </form>
            </div>
        )
        
    }
}
