import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Constants from '../../Constants';

function Pizza_Base(props) {
  return (
    <div>
      <h5>{Constants.baseName}</h5>
      <div className={Constants.items}>
        {
          props.base && props.base.map(base => {
            return (
              <div className={Constants.items} key={base.name} className={Constants.form_check}>
                <label className={Constants.form_check_label}>
                  <input className={Constants.form_check_input} type={Constants.radio}
                    name={Constants.Pizza_Base} id={base.name}
                    checked={base.ischecked}
                    onChange={(e) => props.baseChange(e, base)}
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
