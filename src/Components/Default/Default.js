import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Constants from '../../Constants';

function Default_Toggle(props) {
  return (
    <div>
      <label className="form-check-label">
        <input className="form-check-input" type="checkbox"
          onChange={props.default}
        />
        {Constants.toggleName}
      </label>
    </div>
  )
}

export default Default_Toggle;
