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

 /**
  * Renders the Landing Page
  * @returns Landing Page
  */
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

  /**
   * Sets the JSON to state
   */
  componentDidMount() {
    this.setState(
      {
        displayContents: Contents
        // defaultContent: Default
      })
  }

  /**
   * Handles the base change event by setting the state and Calculating the total
   * @param {Object} props Object of Base array
   * @returns updated state for displayContents and Total
   */
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

  /**
   * Handles the toppings change event by setting the state and Calculating the total
   * @param {Object} props Object of Toppings array
   * @returns updated state for displayContents and Total
   */
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

  /**
   * Hides the displayContents by setting up the state
   */
  handleOrder = () => {
    this.setState({ showContent: false })
  }

/**
 * Hides the Order content by setting up the state
 */
  handleCancel = () => {
    this.setState({ showContent: true })
  }

  /**
   * Sets the default contents
   * @returns defalut contents by setting up the state
   */
  handleDefault = (e) => {
    // const defaultContent = { ...this.state.defaultContent };
    const newDefault = Object.freeze(Default);
    const defaultContent = {...newDefault};
    if (e.target.checked) {
      this.setState({
        displayContents: defaultContent
      }, () => this.handleTotal())
    }
    else {
      this.setState({ displayContents: Contents }, () => this.handleTotal())
    }
  }

  /**
   * Calculates Total
   * @returns finalTotal by setting up the state
   */
  handleTotal = () => {
    let finalTotal = 0;
    if (Object.keys(this.state.displayContents).length > 0) {
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
      this.setState({ total: finalTotal })
    } else { this.setState({ total: 0 }) }
  }

  /**
   * Renders the Main display contents
   * @returns Landing page
   */
  render() {
    return (
      <div className={Constants.overview}>
        <div className={Constants.wrapper}>
          <div>
            <div className={Constants.imageGrid}>
              <img className={Constants.stackImages}
                src={Constants.default_image}
                alt={Constants.alt}
                width={Constants.width}
                height={Constants.height}
              />
              <Pizza displayContents={this.state.displayContents} />
            </div>
            <Toggle default={this.handleDefault} />
          </div>
          {
            this.state.showContent &&
            <div className={Constants.content}>
              <h3 className={Constants.title}>{Constants.heading}</h3>
              <PizzaBase
                base={this.state.displayContents.base}
                baseChange={this.handleBaseChange}
              />
              <Toppings toppings={this.state.displayContents.toppings}
                toppingsChange={this.handleToppingsChange}
              />
              <h5>{Constants.total}{this.state.total}</h5>
              <button className={Constants.orderButton}
                onClick={this.handleOrder}>
                {Constants.button}
              </button>
            </div>
          }
          {
            !this.state.showContent &&
            <Order price={this.state.total} cancel={this.handleCancel} />
          }
        </div>
      </div>
    );
  }
}

export default App;
