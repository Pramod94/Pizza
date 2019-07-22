import React from 'react';
import Constants from '../../Constants';

/**
 * Displays Pizza Image
 * @param {Object} props takes displayContents object
 * @returns Pizza images
 */
function Pizza(props) {
  let imageAry = [];
  if (Object.keys(props.displayContents).length !== 0) {
    props.displayContents.base.map(base => {
      if (base.ischecked) {
        imageAry.push(base.image)
      }
    })
    props.displayContents.toppings.map(toppings => {
      if (toppings.ischecked) {
        imageAry.push(toppings.image)
      }
    })
  }

  return (
    <div>
      {
        imageAry.map(url => {
          return <img className={Constants.stackImages}
            src={url} alt={Constants.alt}
            width={Constants.width} height={Constants.height}
          />
        })
      }
    </div>
  )
}
export default Pizza;
