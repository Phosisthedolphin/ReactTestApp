import React, { Component } from 'react';

class HeroSplash extends Component {
    render() {
        return (
            <div className="heroImage">
                <HeroTextAbout />
            </div>
        );
    }
}

const HeroTextAbout = () => {
    return (
        <div className="HeaderText">
            <h4 style={heroTextStyle}>About Us</h4>
        </div>
    );
}

let heroTextStyle = {
    color: '#0060B6',
    marginTop: '0px',
    fontSize: '55px',
    textTransform: 'uppercase',
    textAlign: 'center',
    textShadow: '-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white',
    fontWeight: '700',
};

export default HeroSplash;