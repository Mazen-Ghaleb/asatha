import React from "react";

function Popup(props){
    return(props.trigger)?(
        <div className="popup">
                <div className="popbody">
                    <img src ={props.img} className="popimg"></img>
                    <h4 className="popcat">{props.catergory}</h4>
                    <h5 className="popname">{props.title}</h5>
                    <p className="popdesc">{props.description}</p>
                    <h6 className="popprice">{props.price} LE</h6>
                    <button className="popbtn">Add to cart</button>
                    <button className="popbtn" onClick={()=> props.setTrigger(false)}>Close</button>
                </div>
        </div>
    ) : "";
}

export default Popup