import { Container, Typography, Box } from '@mui/material';
import { Outlet } from 'react-router'
import './App.css';

function App() {

  document.title = 'Simple React App ~ React Router + Redux + Material UI'

  return (
    <div className="App">
      <Box sx={{ mx: "auto", my: "auto", justifyContent: 'center', alignItems: 'center' }}>
      <Container>
      <Typography variant="h2" align="center">
          Simple React App
        </Typography><br/>
        <Typography variant="subtitle1" align="center">
          I created using...
        </Typography><br/>
        <Typography variant="h2" align="center">
          React Router + Redux + Material UI
        </Typography><br/>
        <Typography variant="h4" align="center">
          Used this <a href='https://jsonplaceholder.typicode.com/'>FakeAPI to Build this project</a>
        </Typography><br/>
        <Typography variant="h6" align="center">
          React Router + Redux + Material UI
        </Typography><br/>
        <Typography variant="subtitle2" align="center">
          React Router + Redux + Material UI
        </Typography>

      </Container>
      <Outlet/>
      </Box>
    </div>
  );
}

export default App

