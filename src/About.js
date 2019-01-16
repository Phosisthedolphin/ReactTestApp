import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className='bodyContent'>
                <div className='infoCards'>
                    <div className='infoCard'>
                        <i class="fas fa-cogs fa-3x"></i>
                        <div className='infoCardText'>
                            <h5>Parts and Hoses</h5>
                            <p>An inventory of over 5000 parts. B620 certified hoses built in house.</p>
                        </div>
                    </div>
                    <div className='infoCard'>
                        <i class="fas fa-handshake fa-3x"></i>
                        <div className='infoCardText'>
                            <h5>Service</h5>
                            <p>We have the people, equipment and experience to get your unit on the road.</p>
                        </div>
                    </div>
                    <div className='infoCard'>
                        <i class="fas fa-truck-loading fa-3x"></i>
                        <div className='infoCardText'>
                            <h5>Sales</h5>
                            <p>We sell new and used tankers from a variety of major manufacturers.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;