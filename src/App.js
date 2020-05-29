import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Home from './components/Home'
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import Modal from './components/Modal'
import Footer from './components/Footer'
import About from './components/About'

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route path="/products" component={ProductList} />
        <Route exact path="/" component={Home} />
        <Route path="/details" component={Details} />
        <Route path="/about" component={About} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
      <Modal />
      <Footer />
    </React.Fragment>
  );
}

export default App;
