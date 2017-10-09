import React from 'react';

const ButtonsComponent = React.createClass({
    handleClick: function () {

    },
    render: function () {
        return (
            <div className="buttons-container">
                <div className="buttons-row">
                    <div className="button">
                        <button onClick={this.handleClick}>+</button>
                    </div>
                    <div className="button">
                        <button onClick={this.handleClick}>1</button>
                    </div>
                    <div className="button">
                        <button onClick={this.handleClick}>2</button>
                    </div>
                    <div className="button">
                        <button onClick={this.handleClick}>3</button>
                    </div>
                </div>
                <div className="buttons-row">
                    <div className="button">
                        <button onClick={this.handleClick}>-</button>
                    </div>
                    <div className="button">
                        <button onClick={this.handleClick}>4</button>
                    </div>
                    <div className="button">
                        <button onClick={this.handleClick}>5</button>
                    </div>
                    <div className="button">
                        <button onClick={this.handleClick}>6</button>
                    </div>
                </div>
                <div className="buttons-row">
                    <div className="button">
                        <button onClick={this.handleClick}>*</button>
                    </div>
                    <div className="button">
                        <button onClick={this.handleClick}>7</button>
                    </div>
                    <div className="button">
                        <button onClick={this.handleClick}>8</button>
                    </div>
                    <div className="button">
                        <button onClick={this.handleClick}>9</button>
                    </div>
                </div>
                <div className="buttons-row">
                    <div className="button">
                        <button onClick={this.handleClick}>/</button>
                    </div>
                    <div className="button">
                        <button onClick={this.handleClick}>.</button>
                    </div>
                    <div className="button">
                        <button onClick={this.handleClick}>C</button>
                    </div>
                    <div className="button">
                        <button onClick={this.handleClick}>=</button>
                    </div>
                </div>
            </div>
        )
    }
})

export default ButtonsComponent;
