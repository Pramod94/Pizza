import React from 'react';
import Constants from '../../Constants';

function Toppings(props) {
  return (
    <div>
      <h4>{Constants.toppingsName}</h4>
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
  )
}

export default Toppings;
