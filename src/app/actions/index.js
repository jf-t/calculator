const addAction  =() => ({
    type: 'ADD'
});

const subtractAction = () => ({
    type: 'SUBTRACT'
});

const multiplyAction = () => ({
    type: 'MULTIPLY'
});

const divideAction = () => ({
    type: 'DIVIDE'
});

const pressKey = (val) => ({
    type: 'KEYPRESS',
    value: val
});

const equalsAction = () => ({
    type: 'EQUALS'
});

const clearAction = () => ({
    type: 'CLEAR'
});

export default  {
    addAction,
    subtractAction,
    multiplyAction,
    divideAction,
    pressKey,
    equalsAction,
    clearAction
}
