import React from 'react';
import './App.css';
import Home from './Home';
import BrowseTransactionData from './BrowseTransactionData';
import BrowseUsers from './BrowseUsers';
import DataHandler from './DataHandler';
import GeneralData from './GeneralData';
import NavBar from './NavBar';
import { Route, Link } from 'react-router-dom';
import ClientHandler from './ClientHandler';
import ProductHandler from './ProductHandler';
import DataPerStore from './DataPerStore';
import View1 from './View1';
import View2 from './View2';
import InsertProduct from './InsertProduct.js';
import UpdateProduct from './UpdateProduct.js';
import DeleteProduct from './DeleteProduct.js';
import InsertClient from './InsertClient.js';
import UpdateClient from './UpdateClient.js';
import DeleteClient from './DeleteClient.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/transactions" component={BrowseTransactionData} />
      <Route exact path="/users" component={BrowseUsers} />
      <Route exact path="/data" component={DataHandler} />
      <Route exact path="/general" component={GeneralData} />
      <Route exact path="/per_store" component={DataPerStore} />
      <Route exact path="/view1" component={View1} />
      <Route exact path="/view2" component={View2} />
      <Route exact path="/data/client" component={ClientHandler} />
      <Route exact path="/data/client/insert" component={InsertClient} />
      <Route exact path="/data/client/update" component={UpdateClient} />
      <Route exact path="/data/client/delete" component={DeleteClient} />
      <Route exact path="/data/product" component={ProductHandler} />
      <Route exact path="/data/product/insert" component={InsertProduct} />
      <Route exact path="/data/product/update" component={UpdateProduct} />
      <Route exact path="/data/product/delete" component={DeleteProduct} />
    </div>
  );
}

export default App;
