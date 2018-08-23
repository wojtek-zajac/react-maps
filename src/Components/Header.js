import React, {Component} from 'react'

class Header extends Component {

    toggleFilterList = () => {
        const filterContainer = document.querySelector('.filter-container')
        filterContainer.classList.toggle('toggle-element')
    }

    render() {
        return(
            <header className="header">
                <h1 
                    className="header-title"
                    tabIndex={0}
                >
                Best Restaurants in Kraków
                </h1>
                 <i
                    className="fas fa-bars toggle-list-button"
                    tabIndex={0}
                    role="button"
                    aria-label="show the list of restaurants"
                    onClick={this.toggleFilterList}
                    onKeyPress={this.toggleFilterList}
                ></i>
            </header>       
        )
    }    
}

export default Header