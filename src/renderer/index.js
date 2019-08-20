import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import WelcomeForm from './form';

const setTheme = type =>
  createMuiTheme({
    palette: {
      type: type ? 'dark' : 'light',
    },
  });

const App = () => {
  const [darkTheme, setDarkTheme] = React.useState(true);

  const handleChange = event => {
    setDarkTheme(event.target.checked);
  };

  return (
    <MuiThemeProvider theme={setTheme(darkTheme)}>
      <CssBaseline />
      <div className="App">
        <FormControlLabel
          control={<Switch checked={darkTheme} onChange={handleChange} value="checkedDarkMode" />}
          label="Dark mode"
        />
        <header className="App-header">
          <WelcomeForm />
        </header>
      </div>
    </MuiThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
