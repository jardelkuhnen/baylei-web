import React from 'react';
import GlobalStyles from './components/GlobalStyles';
import Routes from './routes';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import SideBar from './components/Sidebar';


function App() {
  return (
    <Router>
      <GlobalStyles />
      <SideBar />
      {/* <Routes /> */}
    </Router>
  );
}

export default App;
