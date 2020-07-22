import React, {Component} from 'react';

export default class FilterObject extends Component {
    constructor(){
        super();

        this.state = {
            employees:[
                { name: '',
                  title: '',
                  age: '',
                },
            ] 
        }
    }
}