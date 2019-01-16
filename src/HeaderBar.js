import React, { Component } from 'react';
import gbmHeader from './img/gbm.png';

class HeaderBar extends Component {
    render() {
        return (
            <div className="headerBar">
                <div className="navMenu">
                    <img className="gbmHeader" src={gbmHeader} />
                    <div className="navLinks">
                        <ul>
                            <li>About</li>
                            <li>Parts</li>
                            <li>Sales</li>
                            <li>Service</li>
                            <li>Hoses</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
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