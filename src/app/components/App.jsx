import React, { PropTypes } from 'react';
import OutputComponent from './output/Output';
import ButtonsComponent from './buttons/Buttons';

const App = React.createClass({
    render: function () {
        return (
            <div className="container">
                <OutputComponent outputValue={this.props.outputValue} />
                <ButtonsComponent actions={this.props.actions}/>
            </div>
        );
    }
});

App.propTypes = { children: PropTypes.object };

export default App;
