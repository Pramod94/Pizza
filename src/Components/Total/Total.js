import React from 'react';
import Constants from '../../Constants';

function Total(props) {

  if (Object.keys(props.total).length !== 0) {
    props.total.base.map(base => {
      if (base.ischecked) {
        Constants.finalTotal = Number(base.price);
      }
    })

    props.total.toppings.map(topping => {
      if (topping.ischecked) {
        Constants.finalTotal += Number(topping.price);
      }
    })
  }

  return (
    <div>
      {Constants.total} {Constants.finalTotal}
    </div>
  )
}

export default Total;
