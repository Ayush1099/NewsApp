import React, { Component } from 'react';
import loading from './loading';

export class Spinner extends Component {
    render() {
        return (
            <div>
               <img src={loading} alt="loading" /> 
            </div>
        )
    }
}

export default Spinner
