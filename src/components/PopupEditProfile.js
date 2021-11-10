import React from "react";
import PopupWithForm from "./PopupWithForm";

function PopupEditProfile(props) {
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
        minLength="2"
        maxLength="40"
        className="popup__input popup__input_type_name"
        placeholder="Имя"
        required
      />
      <span className="popup__input-error popup__input-error-name" name="errorName" id="nameProfile-error"></span>
      <input
        type="text"
        name="description"
        id="descriptionProfile"
        minLength="2"
        maxLength="200"
        className="popup__input popup__input_type_job"
        placeholder="О себе"
        required
      />
      <span
        className="popup__input-error popup__input-error-description"
        id="descriptionProfile-error"
        name="errorDescription"
      ></span>
    </PopupWithForm>
  );
}

export default PopupEditProfile;
