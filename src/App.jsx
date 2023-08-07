import React from 'react';
import Navbar from './components/navbar.jsx';
import theme from './theme.jsx';
import { ThemeProvider } from '@mui/material';
import { Outlet } from "react-router-dom";
import Grid from '@mui/material/Grid';

function App() {
  return (
        <ThemeProvider theme={theme}>
          <Grid container>
            <Navbar />
            <Outlet />
          </Grid>
        </ThemeProvider>
  );
}

export default App;
