import React from 'react';
// import '../Default/Toggle.css';
import 'bootstrap/dist/css/bootstrap.css';

function Default_Toggle(props){
  return(
    <div>
       <label>
         <input type="checkbox" onChange={props.onDefault}/>
         Default
         </label>
    </div>
  )
}

export default Default_Toggle;