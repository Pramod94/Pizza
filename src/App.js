import React, { Component } from 'react';
import PizzaBase from './Components/Pizza_Base/Pizza_Base';
import Toppings from './Components/Pizza_Toppings/Toppings';
import Contents from './Components/Contents.json';
import Constants from './Constants';
import Pizza from './Components/Pizza_Image/Image';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      pizzaImage: []
    }
  }

  handleChange = (e, content) => {
    const val = Number(e.target.value);

    switch (e.target.type) {
      case 'radio':
        Constants.baseTotal = val;
        Constants.baseImages = content.image;
        break;

      case 'checkbox':
        if (e.target.checked) {
          Constants.toppingsTotal += val;
          Constants.toppingsImages.push(content.image);
        } else {
          Constants.toppingsTotal -= val;
          let imgIndex = Constants.toppingsImages.indexOf(content.image);
          Constants.toppingsImages.splice(imgIndex, 1);
        }
        break;

      default: console.log("Default Case");
    }

    this.setState({
      total: Constants.baseTotal + Constants.toppingsTotal,
      pizzaImage: [Constants.baseImages, ...Constants.toppingsImages]
    })
  }

  render() {
    return (
      <div className="overview">
        <h2 className="heading">{Constants.heading}</h2>

        <div className="wrapper">
          
          <div className="Content">
            <PizzaBase base={Contents.base} baseChange={this.handleChange} />
            <Toppings toppings={Contents.toppings} toppingsChange={this.handleChange} />
            <h5>{Constants.total}{this.state.total}</h5>
            <button className="btn btn-outline-primary button">{Constants.button}</button>
          </div>

          <div className="Image">
            <img src={Contents.default_image} alt={Constants.alt} width={Constants.width}
              height={Constants.height} />
           <div className="onClickImage">
            <Pizza img={this.state.pizzaImage} />
           </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
