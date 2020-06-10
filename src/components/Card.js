import React from "react"
import "./Card.css"

const Card = props => (
    <div className="Card">
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <button>{props.tag}</button>
        <img src={props.image}></img>
    </div>
)

export default Card