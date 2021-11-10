import React from "react";
import "../../src/index.css";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }
  return (
    <div className="place-card">
      <button className="place-card__trash" type="button"></button>
      <img src={props.card.link} alt={props.card.name} onClick={handleClick} className="place-card__image" />
      <div className="place-card__description">
        <h2 className="place-card__title">{props.card.name}</h2>
        <div className="place-card__like-section">
          <button className="place-card__like-img" type="button"></button>
          <span className="place-card__like-info">{props.card.likes.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
