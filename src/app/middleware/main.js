import { changeOutput } from '../actions/index';
import brain from '../util/calculator_brain';

const logicMiddleware = (store) => (next) => (action) => {
    let brainValue;
    switch (action.type) {
        case 'ADD':
            brainValue = brain.addOperator('+');
            store.dispatch(changeOutput(brainValue));

            return next(action);
        case 'SUBTRACT':
            brainValue = brain.addOperator('-');
            store.dispatch(changeOutput(brainValue));

            return next(action);
        case 'MULTIPLY':
            brainValue = brain.addOperator('*');
            store.dispatch(changeOutput(brainValue));

            return next(action);
        case 'DIVIDE':
            brainValue = brain.addOperator('/');
            store.dispatch(changeOutput(brainValue));

            return next(action);
        case 'KEYPRESS':
            brainValue = brain.valueAddition(action.value);

            store.dispatch(changeOutput(brainValue));

            return next(action);
        case 'EQUALS':
            brainValue = brain.equals();
            store.dispatch(changeOutput(brainValue));

            return next(action);
        case 'CLEAR':
            brainValue = brain.clear();
            store.dispatch(changeOutput(brainValue));

            return next(action);
        default:
            return next(action);
    };
}

export default logicMiddleware;
