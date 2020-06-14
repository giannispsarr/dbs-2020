import React from 'react';
import './App.css';
import Home from './Home';
import BrowseTransactionData from './BrowseTransactionData';
import BrowseUsers from './BrowseUsers';
import DataHandler from './DataHandler';
import GeneralData from './GeneralData';
import NavBar from './NavBar';
import { Route, Link } from 'react-router-dom';
import Shop_1 from './Shops/Shop_1';
import Shop_2 from './Shops/Shop_2';
import Shop_3 from './Shops/Shop_3';
import Shop_4 from './Shops/Shop_4';
import Shop_5 from './Shops/Shop_5';
import Shop_6 from './Shops/Shop_6';
import Shop_7 from './Shops/Shop_7';
import Shop_8 from './Shops/Shop_8';
import Shop_9 from './Shops/Shop_9';
import Shop_10 from './Shops/Shop_10';
import User_1 from './Users/User_1';
import User_2 from './Users/User_2';
import User_3 from './Users/User_3';
import ClientHandler from './ClientHandler';
import ShopHandler from './ShopHandler';
import ProductHandler from './ProductHandler';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/transactions" component={BrowseTransactionData} />
      <Route exact path="/users" component={BrowseUsers} />
      <Route exact path="/data" component={DataHandler} />
      <Route exact path="/general" component={GeneralData} />
      <Route exact path="/transactions/shop1" component={Shop_1} />
      <Route exact path="/transactions/shop2" component={Shop_2} />
      <Route exact path="/transactions/shop3" component={Shop_3} />
      <Route exact path="/transactions/shop4" component={Shop_4} />
      <Route exact path="/transactions/shop5" component={Shop_5} />
      <Route exact path="/transactions/shop6" component={Shop_6} />
      <Route exact path="/transactions/shop7" component={Shop_7} />
      <Route exact path="/transactions/shop8" component={Shop_8} />
      <Route exact path="/transactions/shop9" component={Shop_9} />
      <Route exact path="/transactions/shop10" component={Shop_10} />
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
