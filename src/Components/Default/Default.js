import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Constants from '../../Constants';

/**
 * Default Button
 * @param {method} props
 * @returns Default Button 
 */
function Default_Toggle(props) {
  return (
    <div>
      <label className={Constants.form_check_label}>
        <input className={Constants.form_check_input} type={Constants.checkbox}
          onChange={(e) => props.default(e)}
        />
        {Constants.toggleName}
      </label>
    </div>
  )
}

export default Default_Toggle;
