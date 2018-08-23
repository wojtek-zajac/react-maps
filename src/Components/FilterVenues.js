import React, { Component } from 'react'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class FilterVenues extends Component {

  onFilterChange(query ) {

    const allVenues = this.props.venues
    const visibleVenues = this.props.visibleVenues
    const map = document.getElementById('map')
    const markers = this.props.markers
    const infoWindows = this.props.infoWindows
    let showingNames

    

    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      showingNames = allVenues.filter((venue) => match.test(venue.name))
    } else {
      showingNames = allVenues
    }
       
    showingNames.sort(sortBy('name'))

    this.props.updateVisibleVenues(showingNames)
    
    // Dynamic update markers on the map - from a Udacity webinar
    if (query !== '') {
      allVenues.forEach((venue, index) => {
        if (venue.name.toLowerCase().includes(query.toLowerCase())) {
          markers[index].setVisible(true)
        } else {
          if (visibleVenues.marker === markers[index]) {
            visibleVenues.close()
          }
          markers[index].setVisible(false)
          infoWindows[index].close(map, markers[index])
        }
      })
    } else {
      allVenues.forEach((venue, index) => {
        if (markers.length && markers[index]) {
          markers[index].setVisible(true)
          markers[index].setAnimation(window.google.maps.Animation.DROP)
          infoWindows[index].close(map, markers[index])
        }
      })
    }
    console.log('Visible Venues: ',this.props.visibleVenues)
  }

  render() {
    return(
      <aside className="filter-container">
        <div className="filter-input-container">
          <input
            className="filter-input"
            type="text"
            role="search" 
            aria-label="search restaurant"
            placeholder="Search restaurants"
            value={this.showingNames}
            onChange={(event) => this.onFilterChange(event.target.value)}
          >
          </input>
        </div>
        <ul className="list-items">
          {this.props.visibleVenues.map(venue => {
              return (
                <li 
                  key={venue.id}
                  tabIndex={0}
                  role="button"
                  onClick={() => this.props.clickOnMarker(venue.name)}
                  onKeyPress ={() => this.props.clickOnMarker(venue.name)}
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