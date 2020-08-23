import React,{useEffect} from 'react';

import './App.css';
import Header from './JS/Header';
import Home from './JS/Home';
import Checkout from './JS/Checkout';
import Login from './JS/Login';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {useStateValue} from './JS/StateProvider';
import {auth} from './firebase';


function App() {

  const [{basket},dispatch] = useStateValue();
  //Piece of code which runs based on a given condition

  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged((authUser) => {

      if(authUser){

        //The user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        })


      }
      else{
        //The user is logged out
        dispatch({
          type: "SET_USER",
          user : null,


        })

      }


    });

    return() => {

      unsubscribe();

    }
    
  }, []);



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
