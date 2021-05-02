import React from 'react';
import Routes from './Routes';
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import { CssBaseline } from "@material-ui/core";
import createHistory from 'history/createBrowserHistory';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';

function App() {
  const history = createHistory();
  return (
    <Router history={history}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Routes />
      </MuiThemeProvider>
    </Router>
  );
}

export default App;
