import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import SideBar from '../components/sidebar/Sidebar';
import { Category } from '../pages/Category';
import { Home } from '../pages/Home';
import { Products } from '../pages/Products';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <>
          
          <SideBar /> 
          <Switch>
            <Route path="/clientes">
              <Category />
            </Route>
            <Route path="/produtos">
              <Products />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </>
    </BrowserRouter>
  );
}

export default Routes;