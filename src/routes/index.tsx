import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import SideBar from '../components/sidebar/Sidebar';
import { Category } from '../pages/Category';
import { Home } from '../pages/Home';
import { Products } from '../pages/Products';

const Pagina = styled.div`
  width: 100%;
  margin-left: 400px;
  display: flex;
`;

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
        <SideBar />
        <Pagina>
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
        </Pagina>
    </BrowserRouter>
  );
}

export default Routes;