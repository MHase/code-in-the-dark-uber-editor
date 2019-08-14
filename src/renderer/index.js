import React from 'react';
import ReactDOM from 'react-dom';

import WelcomeForm from './form';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <WelcomeForm />
      </header>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
