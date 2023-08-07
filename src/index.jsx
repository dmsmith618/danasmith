import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Ambiance from './pages/ambiance/ambiance';
import Appliances from './pages/appliances/appliances';
import Calendar from './pages/calendar/calendar';
import Comfort from './pages/comfort/comfort';
import Home from './pages/home/home';
import Media from './pages/media/media';
import Rooms from './pages/rooms/rooms';
import Security from './pages/security/security';


ReactDOM.render(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="ambiance" element={<Ambiance />} />
        <Route path="appliances" element={<Appliances />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="comfort" element={<Comfort />} />
        <Route path="home" element={<Home />} />
        <Route path="media" element={<Media />} />
        <Route path="rooms" element={<Rooms />} />
        <Route path="security" element={<Security />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();