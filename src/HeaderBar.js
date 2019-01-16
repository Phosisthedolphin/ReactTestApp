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
                            <li><a href='#'>About</a></li>
                            <li><a href='#'>Sales</a></li>
                            <li><a href='#'>Service</a></li>
                            <li><a href='#'>Parts</a></li>
                            <li><a href='#'>Hoses</a></li>
                            <li><a href='#'>Contact</a></li>
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