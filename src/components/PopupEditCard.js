import React from "react";
import PopupWithForm from "./PopupWithForm";

function PopupEditCard(props) {
  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      name="edite-card"
      title="Новое место"
      buttonText="Сохранить"
    >
      <input
        type="text"
        name="name"
        id="nameCard"
        className="
                  popup__input
                  popup__input_type_name
                  popup__input_type_edite-card-name
                "
        minLength="2"
        maxLength="30"
        placeholder="Название"
        required
      />
      <span className="popup__input-error popup__input-error-name" name="errorName" id="nameCard-error"></span>
      <input
        type="url"
        name="link"
        id="descriptionCard"
        className="
                  popup__input
                  popup__input_type_job
                  popup__input_type_edite-card-link
                "
        placeholder="Ссылка на картинку"
        required
      />
      <span
        className="popup__input-error popup__input-error-description"
        name="errorDescription"
        id="descriptionCard-error"
      ></span>
    </PopupWithForm>
  );
}

export default PopupEditCard;
