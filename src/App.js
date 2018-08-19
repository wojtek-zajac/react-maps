import React, { Component } from 'react'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import FilterVenues from './Components/FilterVenues'
import Map from './Components/Map'
import * as FoursquareAPI from './FoursquareAPI'


class App extends Component {

  state = {
    venues: [],
    venueIds: [],
    visibleVenues: []
  }

  componentDidMount() {
    this.getFousquareData()
  }

  getFousquareData() {
    FoursquareAPI.getAllVenues()
    .then(venues => {
      const venueIds = venues.map(venue => venue.id)
      console.log(venues)
      console.log(venueIds)
      this.setState({
        venues,
        venueIds,
        visibleVenues: venues
      }, this.renderMap)
    }) 
  }

  updateVisibleVenues = (visibleVenues) => {
    this.setState({
      visibleVenues: visibleVenues
    })
  }

  renderMap = () => {
    loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyDziy5R3lKj_zp1jOfiuH-TAncmOqG1MGo&v=3&callback=initMap')
    window.initMap = this.initMap
  }

  initMap = () => {

    // Create a map
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 50.06465, lng: 19.94498},
      zoom: 13
    })
    console.log(map)

    // Create an InfoWindow
    const infoWindow = new window.google.maps.InfoWindow()

    // Display Dynamic Markers
    this.state.venues.map(venue => {

      const venueName = `${venue.name}`

      // Create a marker
      const marker = new window.google.maps.Marker({
        position: {lat: venue.location.lat, lng: venue.location.lng},
        map: map,
        title: venue.name
      })

      // Click on a marker
      marker.addListener('click', function() {

        // Change content
        infoWindow.setContent(venueName)

        // Open an InfoWindow
        infoWindow.open(map, marker)
      })
    })
  }

  render() {
    return (
      <div className="app">
        <Header/>

        <main>
          <FilterVenues
            venues={this.state.venues}
            visibleVenues={this.state.visibleVenues}
            updateVisibleVenues={this.updateVisibleVenues.bind(this)}
          />

          <Map/>
        </main>

        <Footer/>
      </div>
    )
  }
}

function loadScript(url) {
  const index = window.document.getElementsByTagName('script')[0]
  const script = window.document.createElement('script')
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}

export default App