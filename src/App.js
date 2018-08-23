import React, { Component } from 'react'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import FilterVenues from './Components/FilterVenues'
import Map from './Components/Map'
import {mapStyles} from './Components/MapStyles' 
import * as FoursquareAPI from './FoursquareAPI'

let openInfoWindow

class App extends Component {

  state = {
    venues: [],
    venueIds: [],
    visibleVenues: [],
    markers: [],
    visibleInfoWindow: '',
    isInfoVindowOpen: false,
    infoWindows: [],
    mapStyles: mapStyles
  }

  updateVisibleVenues = (visibleVenues) => {
    this.setState({
      visibleVenues: visibleVenues
    })
  }

  componentDidMount() {
    this.getFousquareData()
    window.gm_authFailure = this.gm_authFailure
  }

  gm_authFailure() {
    window.alert('Google Maps error')
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

  showInfoWindow = (venue) => {
    console.log(venue)
    this.setState({
      visibleInfoWindow: venue,
      isInfoVindowOpen: true
    })
  }

  renderMap = () => {
    loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyDziy5R3lKj_zp1jOfiuH-TAncmOqG1MGo&v=3&callback=initMap')
    window.initMap = this.initMap
  }
 
  initMap = () => {

    // Map defaults
    const mapCenter = {lat: 50.05965, lng: 19.94098}
    const mapDefaultZoom = 15
    const mapOnClickZoom = 17

    // Create a map
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: mapCenter,
      zoom: mapDefaultZoom,
      styles: mapStyles
    })
    console.log(map)

    // Display Dynamic Markers
    this.state.visibleVenues.map(venue => {
     
      const venueName = `${venue.name}`
      
      // Create a marker
      const marker = new window.google.maps.Marker({
        position: {lat: venue.location.lat, lng: venue.location.lng},
        map: map,
        title: venue.name
      })

      this.state.markers.push(marker)

      // Create an InfoWindow
      const infoWindow = new window.google.maps.InfoWindow()

      this.state.infoWindows.push(infoWindow)

      // Reset map on close an InfoWindow
      infoWindow.addListener('closeclick', () =>{
        map.setCenter(mapCenter)
        map.setZoom(mapDefaultZoom)
        marker.setAnimation(null)
     })

      // On a marker click
      marker.addListener('click', () => {

        // Stop bouncing all markers
        for (let i = 0; i < this.state.markers.length; i++) {
          this.state.markers[i].setAnimation(null)
        }

        if (openInfoWindow) {
          marker.open = false
          openInfoWindow.close()
        }
        if (!marker.open) {
            // Open an InfoWindow and set its content
            marker.open = true
            openInfoWindow = infoWindow
            infoWindow.setContent(venueName)
            infoWindow.open(map, marker)
            map.setZoom(mapOnClickZoom)
            map.setCenter(marker.getPosition())
            map.panTo(marker.getPosition())
            marker.setAnimation(window.google.maps.Animation.BOUNCE)
        // Close an InfoWindow and reset the map
        } else {
          marker.open = false
          infoWindow.close()
          map.setCenter(mapCenter)
          map.setZoom(mapDefaultZoom)
          
        }
      })

      // Reset all on the map click
      map.addListener('click', () => {
        infoWindow.close()
        map.setCenter(mapCenter)
        map.setZoom(mapDefaultZoom)
        marker.setAnimation(null)
      })
    })
  }

clickOnMarker = (venueName) => {
  console.log(venueName)
  this.state.markers.map((marker) => {
      if (marker.title === venueName) {
        window.google.maps.event.trigger(marker, 'click')
      }
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
            updateVisibleVenues={this.updateVisibleVenues}
            showInfoWindow={this.showInfoWindow}
            markers={this.state.markers}
            infoWindows={this.state.infoWindows}
            clickOnMarker={this.clickOnMarker}
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
  script.onerror = () => {
    alert('Some error occured with Google Maps. Please refresh the page')
  }
}

export default App