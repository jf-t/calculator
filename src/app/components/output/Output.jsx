import React from 'react';

const OutputComponent = React.createClass({
    outputValue: '(Output)',
    getInitialState: function() {
        return { outputValue: this.props.outputValue };
    },
    componentWillMount: function () {
        if (this.props.outputValue) {
            this.outputValue = this.props.outputValue;
        }
    },
    render: function () {
        return (
            <div className="output-container">
                <div className="output-bar">
                    <h1>{this.props.outputValue}</h1>
                </div>
            </div>
        )
    }
})

export default OutputComponent;
