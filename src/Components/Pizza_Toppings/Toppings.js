import React from 'react';
import Constants from '../../Constants';
import '../Pizza_Toppings/Toppings.css';

function Toppings(props) {
  return (
    <div>
      <h4>{Constants.toppingsName}</h4>
      <div className="items">
      {
        props.toppings.map(toppings => {
          return (
            <div key={toppings.name} className="form-check">
              <input className="form-check-input" type="checkbox" value={toppings.price}
                onChange={(e) => props.toppingsChange(e, toppings)}
              />
              <label className="form-check-label">
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
