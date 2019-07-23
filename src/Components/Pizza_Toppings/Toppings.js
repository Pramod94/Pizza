import React from 'react';
import Constants from '../../Constants';
import '../Pizza_Toppings/Toppings.css';

/**
 * Displays the Pizza Toppings
 * @param {Object} props takes the displayContents toppings Object
 * @returns Pizza Toppings in Checkboxes
 */
function Toppings(props) {
  return (
    <div>
      <h5>{Constants.toppingsName}</h5>
      <div className={Constants.items}>
        {
          props.toppings && props.toppings.map(toppings => {
            return (
              <div key={toppings.name} className={Constants.form_check}>
                <label className={Constants.form_check_label}>
                  <input className={Constants.form_check_input}
                    type={Constants.checkbox}
                    checked={toppings.ischecked}
                    onChange={(e) => props.toppingsChange(e, toppings)}
                    disabled={props.disable_toppings}
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
