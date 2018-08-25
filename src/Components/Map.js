import React, { Component } from 'react'

class Map extends Component {

    render() {
        return (
            <div 
                id="map"
                role="application"
                aria-label="Cracow map of restaurants"
                tabIndex={-1}
            >
                <div
                    className="loading-map loader"
                >
                    Loading...      
                </div>
            </div>
        )
    }
}

export default Map