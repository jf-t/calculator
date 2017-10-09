import React from 'react';
import actions from '../../actions/index';


const ButtonsComponent = React.createClass({
    getInitialState: function() {
        return {actions: this.props.actions};
    },
    handleClick: function (key) {
        switch (key) {
            case '+':
                this.props.actions.addAction();
                break;
            case '-':
                this.props.actions.subtractAction();
                break;
            case '*':
                this.props.actions.multiplyAction();
                break;
            case '/':
                this.props.actions.divideAction();
                break;
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '0':
                this.props.actions.pressKey(parseInt(key));
                break;
            case '=':
                this.props.actions.equalsAction();
                break;
            default:
                console.error('Invalid key press');
                break;
        }
    },
    render: function () {
        return (
            <div className="buttons-container">
                <div className="buttons-row">
                    <div className="button">
                        <button onClick={() => this.handleClick('+')}>+</button>
                    </div>
                    <div className="button">
                        <button onClick={() => this.handleClick('1')}>1</button>
                    </div>
                    <div className="button">
                        <button onClick={() => this.handleClick('2')}>2</button>
                    </div>
                    <div className="button">
                        <button onClick={() => this.handleClick('3')}>3</button>
                    </div>
                </div>
                <div className="buttons-row">
                    <div className="button">
                        <button onClick={() => this.handleClick('-')}>-</button>
                    </div>
                    <div className="button">
                        <button onClick={() => this.handleClick('4')}>4</button>
                    </div>
                    <div className="button">
                        <button onClick={() => this.handleClick('5')}>5</button>
                    </div>
                    <div className="button">
                        <button onClick={() => this.handleClick('6')}>6</button>
                    </div>
                </div>
                <div className="buttons-row">
                    <div className="button">
                        <button onClick={() => this.handleClick('*')}>*</button>
                    </div>
                    <div className="button">
                        <button onClick={() => this.handleClick('7')}>7</button>
                    </div>
                    <div className="button">
                        <button onClick={() => this.handleClick('8')}>8</button>
                    </div>
                    <div className="button">
                        <button onClick={() => this.handleClick('9')}>9</button>
                    </div>
                </div>
                <div className="buttons-row">
                    <div className="button">
                        <button onClick={() => this.handleClick('/')}>/</button>
                    </div>
                    <div className="button">
                        <button onClick={() => this.handleClick('.')}>.</button>
                    </div>
                    <div className="button">
                        <button onClick={() => this.handleClick('0')}>0</button>
                    </div>
                    <div className="button">
                        <button onClick={() => this.handleClick('=')}>=</button>
                    </div>
                </div>
            </div>
        )
    }
})

export default ButtonsComponent;
