import React from 'react';
import Constants from '../../Constants';

function Pizza(props){
  return(
    <div>
      {props.img.map(imageUrl => {
        return <img key={imageUrl} src={imageUrl} alt={Constants.alt} 
        width={Constants.width} height={Constants.height}/>
      })}
    </div>
  )
}

export default Pizza;
