import React from 'react';
import './App.css';
import Home from './Home';
import BrowseTransactionData from './BrowseTransactionData';
import BrowseUsers from './BrowseUsers';
import DataHandler from './DataHandler';
import GeneralData from './GeneralData';
import NavBar from './NavBar';
import { Route, Link } from 'react-router-dom';
import User_1 from './Users/User_1';
import User_2 from './Users/User_2';
import User_3 from './Users/User_3';
import ClientHandler from './ClientHandler';
import ShopHandler from './ShopHandler';
import ProductHandler from './ProductHandler';
import DataPerStore from './DataPerStore';

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
      <Route exact path="/users/user1" component={User_1} />
      <Route exact path="/users/user2" component={User_2} />
      <Route exact path="/users/user3" component={User_3} />
      <Route exact path="/data/client" component={ClientHandler} />
      <Route exact path="/data/shop" component={ShopHandler} />
      <Route exact path="/data/product" component={ProductHandler} />
    </div>
  );
}

export default App;
