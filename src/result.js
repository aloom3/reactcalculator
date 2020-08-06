import React, {Component} from 'react';
import './App.css';


//Renders the result or answer
class result extends Component {
    render() {
    let {result} = this.props;
    return (
        <div className ="result">
            <p> {result} </p>
        </div>
    );
    }
}

export default result;