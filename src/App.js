import React, { Component } from 'react';
import PizzaBase from './Components/Pizza_Base/Pizza_Base';
import Toppings from './Components/Pizza_Toppings/Toppings';
import Contents from './Components/Contents.json';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
       <h2>Pizza Order</h2>
       <PizzaBase base={Contents.base}/>
       <Toppings toppings={Contents.toppings}/>
       <h5>Totoal Price : </h5>
       <button>Order</button>
      </div>
    );
  }
}

export default App;
