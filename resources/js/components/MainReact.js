import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MainReact extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <React.Fragment className="container">
            <h2 align="center">I Love Louise</h2>
        </React.Fragment>
         );
    }
}
 
export default MainReact;

if (document.getElementById('mainreact')) {
    ReactDOM.render(<MainReact />, document.getElementById('mainreact'));
}
