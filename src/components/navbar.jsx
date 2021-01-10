import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <navbar className="navbar">
                {this.props.totalCount}
            </navbar>
        );
    }
}

export default Navbar;