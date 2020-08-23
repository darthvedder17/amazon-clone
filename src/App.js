import React from 'react';

import './App.css';
import Header from './JS/Header';
import Home from './JS/Home';
import Checkout from './JS/Checkout';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
function App() {
  return (

    <Router>


      <div className="app">
        <Switch>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>


          <Route path='/login'>
            <Login />
          </Route>


          <Route path='/'>
            <Header />
            <Home />

          </Route>

        </Switch>
     
      </div>
  </Router>
  );
}

export default App;
