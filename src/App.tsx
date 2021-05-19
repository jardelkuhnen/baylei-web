import { ThemeProvider } from '@material-ui/core/styles';
import GlobalStyles from './components/GlobalStyles';

import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <h1>Ola</h1>
      </>
    </ThemeProvider>
  );
}

export default App;
