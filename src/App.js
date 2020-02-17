import React from 'react';
import Navbar from './Navbar'
import Soda from './Soda'
import Chips from './Chips'
import Candy from './Candy'
import VendingMachine from './VendingMachine'
import { Switch, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/soda' component={Soda} />
        <Route path='/chips' component={Chips} />
        <Route path='/candy' component={Candy} />
        <Route exact path='/' component={VendingMachine} />
      </Switch>
    </div>
  );
}

export default App;
