import React, {Component } from 'react';
export default class EvenAndOdd extends Component {
    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4> Evens and Odds </h4>
                <input className ="inputLine"/>
                <button className="confirmationButton"> Split </button>
                <span className="resultsBox"></span>
                <span className="resultsBox"></span>


            </div>
        )
    }
}