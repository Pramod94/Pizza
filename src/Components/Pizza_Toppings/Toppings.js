import React from 'react';
import Constants from '../../Constants';
import '../Pizza_Toppings/Toppings.css';

function Toppings(props) {
  return (
    <div>
      <h5>{Constants.toppingsName}</h5>
      <div className="items">
      {
       props.toppings && props.toppings.map(toppings => {
          return (
            <div key={toppings.name} className="form-check">
              <label className="form-check-label">
              <input className="form-check-input" type="checkbox"
              defaultChecked = {toppings.ischecked}
                onChange={(e) => props.toppingsChange(e, toppings)}
              />
                {toppings.name}
              </label>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default Toppings;
