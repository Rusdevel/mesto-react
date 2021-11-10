import React from "react";
import "../../src/index.css";
import api from "../utils/Api";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cards]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cards);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="content">
      <section className="section profile">
        <div className="profile__avatar-block">
          <img className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }} src={userAvatar} alt="Аватар" />
          <div onClick={props.onEditAvatar} className="profile__avatar-button"></div>
        </div>

        <div className="profile__section">
          <div className="profile__date">
            <h1 className="profile__name">{userName}</h1>
            <button onClick={props.onEditProfile} type="button" className="button profile__button"></button>
            <p className="profile__job">{userDescription}</p>
          </div>
          <button onClick={props.onAddPlace} type="button" className="button profile__edit-button"></button>
        </div>
      </section>

      <section className="places-list section">
        {cards.map((card) => (
          <Card onCardClick={props.onCardClick} key={card._id} card={card} />
        ))}
      </section>

      <div className="popup popup_type_delete-card">
        <div className="popup__content">
          <button className="popup__close" type="button"></button>
          <h2 className="popup__title">Вы уверены?</h2>
          <button className="button popup__button" type="submit">
            Да
          </button>
        </div>
      </div>
    </main>
  );
}

export default Main;
