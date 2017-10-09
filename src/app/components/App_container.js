import { connect } from 'react-redux';
import App from './App';
import actions from '../actions/index';

function mapStateToProps (state) {
  return {
      outputValue: state
  }
};

function mapDispatchToProps (dispatch) {
    return {
        actions: {
            addAction: () => actions.addAction(),
            subtractAction: () => actions.subtractAction(),
            multiplyAction: () => actions.multiplyAction(),
            divideAction: () => actions.divideAction(),
            pressKey: (key) => actions.presskey(key),
            equalsAction: () => actions.equalsAction(),
            clearAction: () => actions.clearAction()
        }
    }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
