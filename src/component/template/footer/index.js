import React, { Component } from 'react';
import "./footer.css"

class FooterApp extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <footer className="footer">
                    <span className="text-muted">All Rights Reserved 2020 @BootcampG2</span>
                </footer>
            </div>
        );
    }
}
 
export default FooterApp;