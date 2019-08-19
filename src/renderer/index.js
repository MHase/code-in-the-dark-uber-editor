import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import WelcomeForm from './form';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <header className="App-header">
          <WelcomeForm />
        </header>
      </div>
    </MuiThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
