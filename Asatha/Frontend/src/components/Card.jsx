import React from "react";

export default function Card(props){
    return(
        <div className="card">
            <img src ={props.img}className="productimg">
            </img>
            <div className="cardbody">
                <h4 className="procat">{props.catergory}</h4>
                <h5 className="proname">{props.title}</h5>
                <p className="prodesc">{props.description}</p>
                <h6 className="proprice">{props.price} LE</h6>
                <button className="probtn">Add to cart</button>

            </div>
        </div>
    )
}
