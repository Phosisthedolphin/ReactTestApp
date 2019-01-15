import React, { Component } from 'react';

class HeroSplash extends Component {
    render() {
        return (
            <div className="heroImage">
                <HeroText />
            </div>
        );
    }
}

const HeroText = () => {
    return (
        <div className="HeaderText">
            <h4 style={heroTextStyle}>Some Hero Text</h4>
        </div>
    );
}

let heroTextStyle = {
    color: 'white',
    marginTop: '0px',
};

export default HeroSplash;