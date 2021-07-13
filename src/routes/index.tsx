import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import SideBar from '../components/sidebar/Sidebar';
import { Category } from '../pages/Category';
import { MenuInitial } from '../pages/MenuInitial';
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
              <MenuInitial />
            </Route>
          </Switch>
        </>
    </BrowserRouter>
  );
}

export default Routes;