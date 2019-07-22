import React from 'react';
import Constants from '../../Constants';
import 'bootstrap/dist/css/bootstrap.css';
import '../Pizza_Order/Order.css';

function Order(props) {
  return (
    <div className={Constants.order}>
      <h4><strong>{Constants.orderSection}</strong></h4>
      <h5 className={Constants.pizza_price}>{Constants.price} {props.price}</h5>
      <div>
        <h6><strong>{Constants.paymentMethod}</strong></h6>
        <div className={Constants.payment_method}>
          {
            Constants.payment.map(pay => {
              return (
                <label className={Constants.form_check_label}>
                  <input className={Constants.form_check_input}
                    name={Constants.Name} type={Constants.radio}
                  />
                  {pay}
                </label>
              )
            })
          }
        </div>
      </div>
      <div className={Constants.buttons}>
        <button id={Constants.cancel} onClick={props.cancel}>
          {Constants.OrderCancel}
        </button>
        <button id={Constants.confirm}>{Constants.OrderConfirm}</button>
      </div>
    </div>
  )
}

export default Order;
