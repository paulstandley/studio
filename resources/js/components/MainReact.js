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
            <h2 className="mixer-h2">Mixers</h2>
            <main className="main-mixer">
                <h3>Yo</h3>
            </main>
        </React.Fragment>
         );
    }
}
 
export default MainReact;

if (document.getElementById('mainreact')) {
    ReactDOM.render(<MainReact />, document.getElementById('mainreact'));
}
