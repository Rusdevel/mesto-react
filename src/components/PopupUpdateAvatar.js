import React from "react";
import PopupWithForm from "./PopupWithForm";

function PopupUpdateAvatar(props) {
  return (
    <PopupWithForm isOpen={props.isOpen} onClose={props.onClose} name="update-avatar" title="Обновить аватар" buttonText="Сохранить">
      <input
        type="url"
        name="link"
        id="descriptionAvatar"
        className="
                  popup__input
                  popup__input_type_job
                  popup__input_type_edite-card-link
                "
        placeholder="Ссылка на картинку"
        required
      />
      <span className="popup__input-error popup__input-error-description" name="errorDescription" id="descriptionAvatar-error"></span>
    </PopupWithForm>
  );
}

export default PopupUpdateAvatar;
