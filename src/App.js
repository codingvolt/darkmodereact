import React, { useState } from 'react'
import './App.css';
import { ThemeProvider, CssBaseline, createMuiTheme, Switch } from '@material-ui/core';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    }
  })

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <div className="App">
        <header className="App-header"> 
          <Switch onChange={handleDarkMode} value={darkMode}/>
          <h3>
            plain website
          </h3>
          <h5>Created by @codingvolt</h5>
        </header>
        </div>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
