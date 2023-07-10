import React from 'react';
// import './App.css';
// import { createTheme, ThemeProvider } from '@mui/material';
import Navbar from './components/navbar.jsx';
import { Outlet } from 'react-router-dom';
import Grid from '@mui/material';

// const theme = createTheme ({
//   palette: {
//     primary: {
//       main: '#178c8e',
//       darker: '#14504D',
//     },
//   },
// })

function App() {
  return (
    // <ThemeProvider theme={theme}>
    <>
      <Grid container>
        <Navbar />
        <Outlet />
      </Grid>
        <div>
          Is this working?
        </div>
    </>
    // {/* </ThemeProvider> */}
  )
}

export default App
