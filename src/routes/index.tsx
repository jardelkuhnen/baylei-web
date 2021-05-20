import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Header from '../components/header/Header';


function Products() {
  return <h2>Ola produto</h2>
}

function ProductsList() {
  return <h2>Listagem de produtos</h2>;
}

function Bar() {
  return <h2>Bar</h2>;
}

function Home() {
  return <h2>Home Screem</h2>;
}

function Category() {
  return <h2>Categorys</h2>;
}

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <>
          <Switch>
            <Route path="/category">
              <Category />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/">
              <Category />
            </Route>
          </Switch>
        </>
    </BrowserRouter>
  );
}

export default Routes;