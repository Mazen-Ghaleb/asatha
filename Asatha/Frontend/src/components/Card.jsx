import React, { useState } from 'react';
import Popup from './Popup';

export default function Card(props) {
  const [popbtn, setpopbtn] = useState(false);
  return (
    <div className="card">
      <img src={props.img} className="cardimg"></img>
      <div className="cardbody">
        <h4 className="procat">{props.catergory}</h4>
        <h5 className="proname">{props.title}</h5>
        <h6 className="proprice">{props.price} LE</h6>
        <button className="probtn">Add to cart</button>
        <button className="probtn" onClick={() => setpopbtn(true)}>
          View Details
        </button>
      </div>
      <Popup
        trigger={popbtn}
        setTrigger={setpopbtn}
        img={props.img}
        category={props.category}
        title={props.title}
        description={props.description}
        price={props.price}
      />
    </div>
  );
}
