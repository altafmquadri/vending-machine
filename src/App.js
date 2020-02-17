import React from 'react';
import Navbar from './Navbar'
import VendingMachine from './VendingMachine'
import { Switch, Route, Link } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/soda' />
        <Route path='/chips' />
        <Route path='/candy' />
        <Route exact path='/' component={VendingMachine} />
      </Switch>
    </div>
  );
}

export default App;
