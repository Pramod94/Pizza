import React, { Component } from 'react';
import PizzaBase from './Components/Pizza_Base/Pizza_Base';
import Toppings from './Components/Pizza_Toppings/Toppings';
import Contents from './Components/Contents.json';
import Default from './Components/Default.json';
import Constants from './Constants';
import Pizza from './Components/Pizza_Image/Image';
import Order from './Components/Pizza_Order/Order';
import Toggle from './Components/Default/Default';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const finalTotal = 0;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      pizzaImage: [],
      showContent: true,
      baseState: false,
      toppingsState: false,
      displayContents: {},
      defaultContent: {}
    }
  }

  componentDidMount() {
    this.setState(
      { 
        displayContents: Contents,
        defaultContent : Default
       })
  }

  handleBaseChange = (e, content) => {
    let oldBase = [...this.state.displayContents.base];
    const data = { ...this.state.displayContents };
    const newBase = oldBase.map(base => {
      if (content.name == base.name) {
        base.ischecked = e.target.checked;
        return base;
      } else {
        base.ischecked = false;
        return base;
      }
    })
    this.setState({ displayContents: { base: newBase, toppings: data.toppings } });
    this.handleTotal();
  }

  handleToppingsChange = (e, content) => {
    let oldToppings = [...this.state.displayContents.toppings];
    const data = { ...this.state.displayContents };
    const newToppings = oldToppings.map(topping => {
      if (content.name == topping.name) {
        topping.ischecked = e.target.checked;
        return topping;
      } else {
        return topping;
      }
    })
    this.setState({ displayContents: { base: data.base, toppings: newToppings } })
    this.handleTotal();
  }

  handleOrder = () => {
    this.setState({ showContent: false })
  }

  handleCancel = () => {
    this.setState(
      {
        showContent: true
      })
  }

  handleDefault = () => {
    console.log("Default handler");
    this.setState({ baseState: true })
    console.log(this.state.baseState);
  }
  
  handleTotal = () => {  
      this.state.displayContents.base.map(base => {
        if (base.ischecked) {
          finalTotal = Number(base.price);
        }
      })
      this.state.displayContents.toppings.map(topping => {
        if (topping.ischecked) {
          finalTotal += Number(topping.price);
        }
      }) 
    this.setState({ total : finalTotal })
  }

  render() {
    return (
      <div className="overview">

        <div className="wrapper">
          <div>
            <div className="image-grid">
              <img className="stack-images" src={Constants.default_image} alt={Constants.alt} width={Constants.width}
                height={Constants.height} />
              <Pizza displayContents={this.state.displayContents} />
            </div>
            <Toggle 
            defaultContent={this.state.defaultContent}
            default={this.handleDefault} 
            />
          </div>

          {this.state.showContent &&
            <div className="Content">
              <h3 className="heading">{Constants.heading}</h3>
              <PizzaBase
                base={this.state.displayContents.base}
                baseChange={this.handleBaseChange}
              />
              <Toppings toppings={this.state.displayContents.toppings}
                toppingsChange={this.handleToppingsChange}
              />
              <h5>{Constants.total}{this.state.total}</h5>
              <button className="order-button"
                onClick={this.handleOrder}
              >{Constants.button}</button>
            </div>
          }
          {!this.state.showContent &&
            <Order price={this.state.total} cancel={this.handleCancel} />
          }
        </div>
      </div>
    );
  }
}

export default App;
