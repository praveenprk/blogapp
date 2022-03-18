/* import { CssBaseline } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react'; */
import { Outlet } from 'react-router';
import './App.css';

function App() {

  return (
    <div className="App">
      Home
      <Outlet/>
    </div>
  );
}

export default App;

