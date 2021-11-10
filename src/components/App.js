import React from "react";
import "../../src/index.css";
import Header from "./Header";
import Main from "./main";
import Footer from "./Footer";
import PopupEditeProfile from "./PopupEditeProfile";
import PopupEditeCard from "./PopupEditeCard";
import PopupUpdateAvatar from "./PopupUpdateAvatar";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupEditeProfile isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
      <PopupEditeCard isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
      <PopupUpdateAvatar isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
      <ImagePopup card={selectedCard !== null && selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
