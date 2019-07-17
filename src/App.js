import React, { Component } from 'react';
import PizzaBase from './Components/Pizza_Base/Pizza_Base';
import Toppings from './Components/Pizza_Toppings/Toppings';
import Contents from './Components/Contents.json';
import image from './Pizza-Images/pizza.png';
import Constants from './Constants';
import './App.css';

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
      case 'radio': Constants.baseTotal = val;
        break;
      case 'checkbox': Constants.toppingsTotal = e.target.checked ?
        (Constants.toppingsTotal + val) : (Constants.toppingsTotal - val)
        break;
    }
    this.setState({ total: Constants.baseTotal + Constants.toppingsTotal })
  }

  render() {
    return (
      <div>
        <h2>{Constants.heading}</h2>
        <PizzaBase base={Contents.base} baseChange={this.handleChange} />
        <Toppings toppings={Contents.toppings} toppingsChange={this.handleChange} />
        <h5>{Constants.total}{this.state.total}</h5>
        <button>{Constants.button}</button>
        <img src={image} alt="pizza" width="300px" height="300px" />
      </div>
    );
  }
}

export default App;
