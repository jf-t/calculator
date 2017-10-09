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

const pressInteger = (val) => ({
    type: 'KEYPRESS',
    value: val
});

const equalsAction = () => ({
    type: 'EQUALS'
});
