import React from "react";
import "../../src/index.css";
import PopupWithForm from "./PopupWithForm";

function PopupEditeProfile(props) {
  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
  }
  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      name="edit-profile"
      title="Редактировать профиль"
      buttonText="Сохранить"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        id="nameProfile"
        name="name"
        minlength="2"
        maxlength="40"
        className="popup__input popup__input_type_name"
        placeholder="Имя"
        required
      />
      <span className="popup__input-error popup__input-error-name" name="errorName" id="nameProfile-error"></span>
      <input
        type="text"
        name="description"
        id="descriptionProfile"
        minlength="2"
        maxlength="200"
        className="popup__input popup__input_type_job"
        placeholder="О себе"
        required
      />
      <span className="popup__input-error popup__input-error-description" id="descriptionProfile-error" name="errorDescription"></span>
    </PopupWithForm>
  );
}

export default PopupEditeProfile;
