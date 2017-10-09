import { connect } from 'react-redux';
import App from './App';
import { addAction, subtractAction, multiplyAction, divideAction, pressKey, equalsAction, clearAction, addDot, inverseAction } from '../actions/index';

function mapStateToProps (state) {
  return {
      outputValue: state
  }
};

function mapDispatchToProps (dispatch) {
    return {
        actions: {
            addAction: function () { dispatch(addAction()) },
            subtractAction: function () { dispatch(subtractAction()) },
            multiplyAction: function () { dispatch(multiplyAction()) },
            divideAction: function () { dispatch(divideAction()) },
            pressKey: function (key) { dispatch(pressKey(key)) },
            equalsAction: function () { dispatch(equalsAction()) },
            clearAction: function () { dispatch(clearAction()) },
            addDot: function () { dispatch(addDot()) },
            inverseAction: function () { dispatch(inverseAction()) }
        }
    }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
