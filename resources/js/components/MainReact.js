import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Mixer4 from './Mixer4';
import Mixer8 from './Mixer8';

class MainReact extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            mixer4: true,
            mixer8: false
         }
    }
    render() { 
        return ( 
        <React.Fragment className="container">
            <h2 className="mixer-h2">Mixers</h2>
            <main className="main-mixer">
                { !this.state.Mixer4 ? <Mixer4 /> : <Mixer8 /> }
            </main>
        </React.Fragment>
         );
    }
}
 
export default MainReact;

if (document.getElementById('mainreact')) {
    ReactDOM.render(<MainReact />, document.getElementById('mainreact'));
}
