import React, { Component } from 'react';

class HeaderBar extends Component {
    render() {
        return (
            <div className="headerBar">
                This is the header component
                <NavText />
            </div>
        );
    }
}

const NavText = () => {
    return (
        <h3>Some menu navbar text...</h3>
    );
}

export default HeaderBar;