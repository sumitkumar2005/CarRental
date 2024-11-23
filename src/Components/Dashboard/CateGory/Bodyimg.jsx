import React from 'react'

function Bodyimg(props){
  return (
    <div>
       <div className="brand-item">
      <img src={props.img} alt={props.name} className="brand-image" />
      <p className="brand-name">{props.name}</p>
    </div>
    </div>
  )
}

export default Bodyimg
