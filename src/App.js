import React, { Component } from 'react';
import HeaderBar from "./HeaderBar";
import HeroSplash from "./HeroSplash";
import FooterBar from "./FooterBar";
import Table from "./Table";

class App extends Component {
    render() {
        return (
            <div className="App">
                <HeaderBar />
                <HeroSplash />
                <Table />
                <FooterBar />
            </div>
        );  
    }
}

export default App;