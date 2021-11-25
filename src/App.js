import Routes from './routes'
import GlobalStyle from './styles/global';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <GlobalStyle />
        Hello World! Me livrei da maldição!
      <Routes />
      <Toaster />
    </div>
  );
}

export default App;
// import { Box, Grid, Paper, styled } from "@mui/material"