const rootReducer = (state = {}, action) => {
    switch(action.type) {
        case 'ADD':
            return state;
        case 'SUBTRACT':
            return state;
        case 'MULTIPLY':
            return state;
        case 'DIVIDE':
            return state;
        case 'KEYPRESS':
            return state;
        case 'EQUALS':
            return state;
        case 'CLEAR':
            return state;
        default:
            return state;
    }
}

export default rootReducer;
