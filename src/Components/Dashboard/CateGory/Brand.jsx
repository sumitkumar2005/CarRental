import React from 'react';

function Brand(props) {
  return (
    <div className="brand-item">
      <img src={props.img} alt={props.name} className="brand-image" />
      <p className="brand-name">{props.name}</p>
    </div>
  );
}

export default Brand;
