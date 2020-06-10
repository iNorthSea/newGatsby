import React from "react"
import "./HeroIcon.css"

const HeroIcon = props => (
    <div className="HeroIcon">
        <img src={props.pic} width="50px"/>
    </div>
)

export default HeroIcon