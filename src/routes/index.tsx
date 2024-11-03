import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import SideBar from '../components/sidebar/Sidebar';
import { Home } from '../pages/home/Home';
import ClientPage from '../pages/cliente/ClientPage';
import SellerPage from '../pages/seller/SellerPage';
import ProductPage from '../pages/product/ProductPage';
import PlanPage from '../pages/plan/PlanPage';
import CreateProductForm from '../pages/product/ProductNew';
import EditProductForm from '../pages/product/ProductEdit';

const Pagina = styled.div`
  // width: 85%;
  margin-left: 315px;
  // margin-right: 1px;
  display: flex;
`;

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
        <SideBar />
        <Pagina>
          <Switch>
            <Route path="/client">
              <ClientPage />
            </Route>
            <Route path="/product">
              <ProductPage />
            </Route>
            <Route path="/new-product" component={CreateProductForm} />
            <Route path="/edit-product/:id" component={EditProductForm} />
            {/* <Route path="/plan">
              <PlanPage />
            </Route> */}
            <Route path="/order">
              <PlanPage />
            </Route>
            {/* <Route path="/seller">
              <SellerPage />
            </Route> */}
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Pagina>
    </BrowserRouter>
  );
}

export default Routes;