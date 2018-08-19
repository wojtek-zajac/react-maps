import React, {Component} from 'react'

class Header extends Component {

    toggleFilterList = () => {
        const filterContainer = document.querySelector('.filter-container')
        const mapElement = document.getElementById('map')
        filterContainer.classList.toggle('toggle-element')
        mapElement.classList.toggle('expand-map')
    }

    render() {
        return(
            <header className="header">
               
                <h1 className="header-title">Best Restaurants in Kraków, Poland</h1>

                 <i
                    className="fas fa-bars toggle-list-button"
                    onClick={this.toggleFilterList}
                ></i>
            </header>       
        )
    }    
}

export default Header