export const addAction = () => ({
    type: 'ADD'
});

export const subtractAction = () => ({
    type: 'SUBTRACT'
});

export const multiplyAction = () => ({
    type: 'MULTIPLY'
});

export const divideAction = () => ({
    type: 'DIVIDE'
});

export const pressKey = (val) => ({
    type: 'KEYPRESS',
    value: val
});

export const equalsAction = () => ({
    type: 'EQUALS'
});

export const clearAction = () => ({
    type: 'CLEAR'
});

export const changeOutput = (output) => ({
    type: 'CHANGED_VALUE',
    value: output
});

export const addDot = () => ({
    type: 'DOT'
});


export const inverseAction = () => ({
    type: 'INVERSE'
});
