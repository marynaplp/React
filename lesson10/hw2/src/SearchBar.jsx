// receives all user input; needs to display the search text and checked state.
import React, { Component } from  'react';

class SearchBar extends Component {
    render() {
        render (
            <form>
                <input type ="text"
                placeholder="Search..." />
                <p>
                    <input type="checkbox" />
                    {' '}
                    Only show products in stock
                    </p>               
            </form>
        )
    }
}
