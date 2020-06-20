import React from 'react';
import logo from './logo.svg';
import './App.css';
import theme from './theme.js'
import { ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      barev arev
    </div>
    </ThemeProvider>
  );
}

export default App;
