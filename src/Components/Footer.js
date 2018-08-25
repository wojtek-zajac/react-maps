import React, {Component} from 'react'

class Footer extends Component {

    render() {
        return(
            <footer
                className="footer"
                tabIndex={0}
            >
                <div className="footer-text">
                    <p className="copyright">
                        &copy; Copyright 2018 by Wojciech Zając - 
                    </p>
                    <p className="attribution">
                        Powered by <a href="https://cloud.google.com/maps-platform/" target="_blank" rel="noopener noreferrer">Google Maps</a> 
                        and <a href="https://developer.foursquare.com/" target="_blank" rel="noopener noreferrer">Foursquare</a>
                    </p>
                </div>
            </footer>       
        )
    }    
}

export default Footer