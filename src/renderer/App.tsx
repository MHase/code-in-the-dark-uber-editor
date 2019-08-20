import React from 'react';
import { render } from 'react-dom';
import { Router, Switch as RouterSwitch, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import EditorView from './views/Editor/index';
import WelcomeForm from './Form';

const customHistory = createBrowserHistory();

const setTheme = (type: boolean) =>
  createMuiTheme({
    palette: {
      type: type ? 'dark' : 'light',
    },
  });

const App = () => {
  const [darkTheme, setDarkTheme] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDarkTheme(event.target.checked);
  };

  return (
    <>
      <MuiThemeProvider theme={setTheme(darkTheme)}>
        <CssBaseline />
        <FormControlLabel
          control={<Switch checked={darkTheme} onChange={handleChange} value="checkedDarkMode" />}
          label="Switch mode"
        />
        <Router history={customHistory}>
          <RouterSwitch>
            <Route path="/" component={WelcomeForm} />
            <Route path="/editor" component={EditorView} />
          </RouterSwitch>
        </Router>
      </MuiThemeProvider>
    </>
  );
};

render(<App />, document.getElementById('app'));
