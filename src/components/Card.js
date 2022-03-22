import React from "react";
import { Link } from "react-router-dom";


const Card = ({card, number}) => {
    const {img, title, description} = card;
    return (
        <Link to={`project${number + 1}`}>
            <div className="card">
                <img src={img} alt="ProjectPhoto"/>
                <div className="card-text">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </Link>
    )
}
export default Card