import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Constants from '../../Constants';

function Pizza_Base(props) {
  return (
    <div>
      <h4>{Constants.baseName}</h4>
      <div className="items">
      {
        props.base.map(base => {
          return (
            <div className="item" key={base.name} className="form-check">
              <label className="form-check-label">
              <input className="form-check-input" type="radio"
                name="Pizza Base" id={base.name}
                defaultChecked={props.check}
                onChange={(e) => props.baseChange(e,base)}
              />
                {base.name}
              </label>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default Pizza_Base;
