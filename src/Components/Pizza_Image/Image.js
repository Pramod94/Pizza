import React from 'react';

function Pizza(props){
  return(
    <div>
      <img src={props.img} alt="Pizza" width="300px" height="300px" />
    </div>
  )
}

export default Pizza;
