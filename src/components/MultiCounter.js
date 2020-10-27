import React, { Component } from 'react';
import CounterGroup from './CounterGroup';
import CounterGroupSum from './CounterGroupSum';
import CounterSizeGenerator from './CounterSizeGenerator';
class MultiCounter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            size: 0, sum: 0
        };
    }

    onGenerate = (size) => {
        console.log(size);
        this.setState({ size })
    }

    addToSum = (value) => {
        this.setState((prevState) => ({ sum: prevState.sum + value }));
    }

    render() {
        return (
            <div>
                <CounterSizeGenerator onGenerate={this.onGenerate} />
                <CounterGroupSum sum={this.state.sum} />
                <CounterGroup size={this.state.size} addToSum={this.addToSum} />
            </div>
        );
    }
}

export default MultiCounter;