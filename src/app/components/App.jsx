import React, { PropTypes } from 'react';
import OutputComponent from './output/Output';
import ButtonsComponent from './buttons/Buttons';

function App({ children }) {
  return (
    <div className="container">
      <OutputComponent />
      <ButtonsComponent />
    </div>
  );
}

App.propTypes = { children: PropTypes.object };

export default App;
