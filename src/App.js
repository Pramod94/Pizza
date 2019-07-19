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
      baseState: false,
      toppingsState: false,
      displayContents: {}
    }
  }

  componentDidMount() {
    this.setState({ displayContents: Contents })
  }

  handleBaseChange = (e, content) => {
    let oldBase = [...this.state.displayContents.base];
    const data = {...this.state.displayContents};
    // content.ischecked = e.target.defaultChecked;
    // data.base = {...data.base,...content}
    // this.setState({displayContents : Object.assign(data,data.base)})
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

    // if(this.state.displayContents.ischecked){
    //   switch (e.target.type) {
    //     case 'radio':
    //       Constants.baseTotal = val;
    //       Constants.baseImages = content.image;
    //       break;
    //     case 'checkbox':
    //       if (e.target.checked) {
    //         Constants.toppingsTotal += val;
    //         Constants.toppingsImages.push(content.image);
    //       } else {
    //         Constants.toppingsTotal -= val;
    //         let imgIndex = Constants.toppingsImages.indexOf(content.image);
    //         Constants.toppingsImages.splice(imgIndex, 1);
    //       }
    //       break;

    //     default: console.log("Default Case");
    //   }
    // }

    // this.setState({
    //   total: Constants.baseTotal + Constants.toppingsTotal,
    //   pizzaImage: [Constants.baseImages, ...Constants.toppingsImages]
    // })

  }

  handleToppingsChange = (e,content) => {
    let oldToppings = [...this.state.displayContents.toppings];
    const data = {...this.state.displayContents};
    // content.ischecked = e.target.defaultChecked;
    // data.base = {...data.base,...content}
    // this.setState({displayContents : Object.assign(data,data.base)})
    const newToppings = oldToppings.map(topping => {
      if (content.name == topping.name) {
        topping.ischecked = e.target.checked;
        return topping;
      } else {
        return topping;
      }
    })
    this.setState({ displayContents: { base: data.base, toppings: newToppings } })
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
    this.setState({ baseState: true })
    console.log(this.state.baseState);
  }

  // temp = true;

  render() {
    // console.log(this.state.displayContents);
    return (
      <div className="overview">

        <div className="wrapper">
          <div>
            <div className="image-grid">
              <img className="stack-images" src={Constants.default_image} alt={Constants.alt} width={Constants.width}
                height={Constants.height} />
              <Pizza displayContents={this.state.displayContents} />
            </div>
            <Toggle default={this.handleDefault} />
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
