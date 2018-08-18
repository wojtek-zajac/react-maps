import React, { Component } from 'react'
import './App.css'
import * as FoursquareAPI from './FoursquareAPI'


class App extends Component {

  state = {
    venues: [],
    venueIds: []
  }

  componentDidMount() {
    this.getFousquareData()
    this.renderMap()
  }

getFousquareData() {
  FoursquareAPI.getAllVenues()
  .then(venues => {
    const venueIds = venues.map(venue => venue.id)
    console.log(venues)
    console.log(venueIds)
    this.setState({
      venues,
      venueIds
    })
  }) 
}

  renderMap = () => {
    loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyDziy5R3lKj_zp1jOfiuH-TAncmOqG1MGo&v=3&callback=initMap')
    window.initMap = this.initMap
  }

  initMap = () => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 50.06465, lng: 19.94498},
      zoom: 13
    })
    console.log(map)
  }

  render() {
    return (
      <main>
        <div id="map"></div>
      </main>
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
