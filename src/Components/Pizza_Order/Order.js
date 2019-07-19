import React from 'react';
import Constants from '../../Constants';
import Contents from '../Contents.json';
import 'bootstrap/dist/css/bootstrap.css';

function Order(props) {
  return (
    <div>
      <h3>{Constants.orderSection}</h3>
      <div>{Constants.price} {props.price}</div>
      <div>
        <h4>{Constants.paymentMethod}</h4>
        {Contents.payment.map(pay => {
          return (
            <label className="form-check-label">
              <input className="form-check-input" name="Payment" type="radio" />
              {pay}
            </label>
          )
        })}
      </div>
      <div>
        <button onClick={props.cancel}>{Constants.OrderCancel}</button>
        <button>{Constants.OrderConfirm}</button>
      </div>
    </div>
  )
}

export default Order;
