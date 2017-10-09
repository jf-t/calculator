import { merge } from 'lodash';

const rootReducer = (state = '', action) => {
    switch(action.type) {
        case 'CHANGED_VALUE':
            return action.value;
        default:
            return state;
    }
}

export default rootReducer;
