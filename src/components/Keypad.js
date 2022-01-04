// Code Keypad Component Here
import React, {Component} from 'react';

export default class Keypad extends Component {

    onKeyUp = () => console.log('Entering password...')

    render() {
        return <input type="password" onKeyUp={this.onKeyUp}></input>

    }
}
//onKeyUp is the event
//we handle it by calling a function that we called onKeyUp 
//when the app hears the actual user event "onKeyUp"