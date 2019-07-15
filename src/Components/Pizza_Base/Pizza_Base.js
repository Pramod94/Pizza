import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Pizza_Base(props) {
  return (
    <div>
      <h4>Pizza Base</h4>
      {
        props.base.map(base => {
          return (
            <div key={base.name} className="form-check">
              <input className="form-check-input" type="radio" name="Pizza Base" value={base.price} />
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
