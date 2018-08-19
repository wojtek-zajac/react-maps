import React, { Component } from 'react'

class FilterVenues extends Component {
    render() {
        return(
            <aside className="filter-container">
                <input
                    className="filter-input"
                    type="text"
                    placeholder="Filter restaurants"
                >
                </input>

                <ul className="list-items">
                    <li>Restauran 1</li>
                    <li>Restauran 2</li>
                    <li>Restauran 3</li>
                    <li>Restauran 4</li>
                    <li>Restauran 5</li>
                    <li>Restauran 6</li>
                    <li>Restauran 7</li>
                    <li>Restauran 8</li>
                    <li>Restauran 9</li>
                    <li>Restauran 10 etc</li>
                </ul>

            </aside>
        )
    }
}

export default FilterVenues