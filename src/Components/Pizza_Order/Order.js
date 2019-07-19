import React from 'react';
import Constants from '../../Constants';
import Contents from '../Contents.json';
import 'bootstrap/dist/css/bootstrap.css';
import '../Pizza_Order/Order.css';

function Order(props) {
  return (
    <div className="order">
      <h4><strong>{Constants.orderSection}</strong></h4>
      <h5 className="pizza-price">{Constants.price} {props.price}</h5>
      <div>
        <h6><strong>{Constants.paymentMethod}</strong></h6>
        <div className="payment-method">
        {Constants.payment.map(pay => {
          return (
            <label className="form-check-label">
              <input className="form-check-input" name="Payment" type="radio" />
              {pay}
            </label>
          )
        })}
        </div>
      </div>
      <div className="buttons">
        <button id="cancel" onClick={props.cancel}>{Constants.OrderCancel}</button>
        <button id="confirm">{Constants.OrderConfirm}</button>
      </div>
    </div>
  )
}

export default Order;
