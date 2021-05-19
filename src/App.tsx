import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import GlobalStyles from './components/GlobalStyles';
import Routes from './routes';

function Bar() {
  return <h2>Bar</h2>;
}

function App() {
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyles />
      <Bar />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
