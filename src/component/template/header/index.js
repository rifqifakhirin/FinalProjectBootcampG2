import React, { Component } from 'react';
import "./header.css"

class HeaderApp extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div className="navbar-brand">Bank Service App</div>
                    </nav>
                </header>
            </div>
        );
    }
}
 
export default HeaderApp;