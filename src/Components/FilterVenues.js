import React, { Component } from 'react'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class FilterVenues extends Component {

    onFilterChange(query) {
        let showingNames
        if(query) {
            const match = new RegExp(escapeRegExp(query), 'i')
            showingNames = this.props.venues.filter((venue) => match.test(venue.name))

            // this.props.updateVisibleVenues(showingNames)
        } else {
            showingNames = this.props.venues
        }
        
        showingNames.sort(sortBy('name'))

        this.props.updateVisibleVenues(showingNames)
    }


    render() {
        return(
            <aside className="filter-container">
                
                <input
                    className="filter-input"
                    type="text"
                    placeholder="Filter restaurants"
                    value={this.showingNames}
                    onChange={(event) => this.onFilterChange(event.target.value)}
                >
                </input>

                <ul className="list-items">
                    {this.props.visibleVenues.map(venue => {
                            return (
                                <li 
                                    key={venue.id}
                                    onClick={() => {this.props.showInfoWindow(venue.id)}}
                                >
                                    {venue.name}
                                </li>
                            )
                        })
                    }
                </ul>

            </aside>
        )
    }
}

export default FilterVenues