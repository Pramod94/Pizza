import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Constants from '../../Constants';

function Pizza_Base(props) {
  return (
    <div>
      <h4>{Constants.baseName}</h4>
      {
        props.base.map(base => {
          return (
            <div key={base.name} className="form-check">
              <input className="form-check-input" type="radio"
                name="Pizza Base" id={base.name}
                value={base.price}
                onChange={(e) => props.baseChange(e, base)}
              />
              <label className="form-check-label">
                {base.name}
              </label>
            </div>
          )
        })
      }
    </div>
  )
}

export default Pizza_Base;
