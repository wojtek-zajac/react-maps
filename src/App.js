import React, { Component } from 'react'
import './App.css'

class App extends Component {

initMa = () => {
  const map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 50.06465, lng: 19.94498},
    zoom: 8
  })
}


  render() {
    return (
      <main>
        <div id="map"></div>
      </main>
    )
  }
}

export default App
