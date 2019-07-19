import React, { Component } from 'react';
import PizzaBase from './Components/Pizza_Base/Pizza_Base';
import Toppings from './Components/Pizza_Toppings/Toppings';
import Contents from './Components/Contents.json';
import Constants from './Constants';
import Pizza from './Components/Pizza_Image/Image';
import Order from './Components/Pizza_Order/Order';
import Toggle from './Components/Default/Default';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      pizzaImage: [],
      showContent: true,
      baseState : false,
      toppingsState : false
    }
  }

  handleChange = (e, content) => {
    const val = Number(content.price);

    switch (e.target.type) {
      case 'radio':
        Constants.baseTotal = val;
        Constants.baseImages = content.image;
        console.log(this.state.baseState);
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

  handleOrder = () => {
    console.log("Order Clicked");
    this.setState({ showContent: false })
  }

  handleCancel = () => {
    this.setState(
      {
        showContent: true,
        // total : 0,
        // pizzaImage : []
      })
  }

  handleDefault = () => {
    console.log("Default handler");
  }

  // temp = true;
  
  render() {
    return (
      <div className="overview">

        <div className="wrapper">
          <div>
          <div className="image-grid">
            <img className="stack-images" src={Contents.default_image} alt={Constants.alt} width={Constants.width}
              height={Constants.height} />
            <Pizza img={this.state.pizzaImage} />
          </div>
          <Toggle default={this.handleDefault}/>
          </div>

          {this.state.showContent &&
            <div className="Content">
              <h2 className="heading">{Constants.heading}</h2>
              <PizzaBase 
              base={Contents.base} 
              baseChange={this.handleChange}
              check={this.state.baseState}
               />
              <Toppings toppings={Contents.toppings} toppingsChange={this.handleChange} />
              <h5>{Constants.total}{this.state.total}</h5>
              <button className="btn btn-outline-primary button"
                onClick={this.handleOrder}
              >{Constants.button}</button>
            </div>
          }
          {!this.state.showContent &&
            <Order price={this.state.total} cancel={this.handleCancel} />
          }
        </div>

        {/* <div class="form-check">
          <input class="form-check-input" type="checkbox" defaultChecked={this.temp} id="defaultCheck1" />
          <label class="form-check-label" for="defaultCheck1">
            Default checkbox
          </label>
        </div> */}
      </div>
    );
  }
}

export default App;
