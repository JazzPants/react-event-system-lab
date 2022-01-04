// Code EyesOnMe Component Here
import React, {Component} from 'react';

export default class EyesOnMe extends Component {
    // constructor(props) {

    // }

    onFocus = () => console.log('Good!');
    onBlur = () => console.log('Hey! Eyes on me!');

    render() {
        return<button onFocus={this.onFocus} onBlur={this.onBlur}>Button</button>

    }
}

//works with tab and shift-tab when you click on button or input