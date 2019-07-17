import React, { Component } from 'react';
import PizzaBase from './Components/Pizza_Base/Pizza_Base';
import Toppings from './Components/Pizza_Toppings/Toppings';
import Contents from './Components/Contents.json';
import image from './Pizza-Images/pizza.png';
import './App.css';

var toppingsTotal = 0;
var baseTotal = 0;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      toppingsTotal: 0
    }
  }

  handleChange = (e) => {
    const val = Number(e.target.value);
    switch (e.target.type) {
      case 'radio': baseTotal = val;
        break;
      case 'checkbox': toppingsTotal = e.target.checked ? (toppingsTotal + val) :
        (toppingsTotal - val)
        break;
    }
    this.setState({ total: baseTotal + toppingsTotal })
  }


  render() {
    return (
      <div>
        <h2>Pizza Order</h2>
        <PizzaBase base={Contents.base} baseChange={this.handleChange} />
        <Toppings toppings={Contents.toppings} toppingsChange={this.handleChange} />
        <h5>Totoal Price : {this.state.total}</h5>
        <button>Order</button>
        <img src={image} alt="pizza" width="300px" height="300px" />
      </div>
    );
  }
}

export default App;
