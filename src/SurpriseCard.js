import React, { useState } from "react";
import Modal from "react-modal";
import "./SurpriseCard.css";

Modal.setAppElement("#root");
const cards = [
  { photo: "https://via.placeholder.com/250", message: "Thank you for everything, Mom! 💕" },
  { photo: "https://via.placeholder.com/250", message: "You are my biggest blessing! 🌸" },
  { photo: "https://via.placeholder.com/250", message: "I cherish every moment with you! 💖" },
  { photo: "https://via.placeholder.com/250", message: "You make my world brighter! ☀️" }

];

const SurpriseCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleOpen = () => {
    const randomCard = cards[Math.floor(Math.random() * cards.length)];
    setSelectedCard(randomCard);
    setIsOpen(true);
  };

  return (
    <div>
      <button className="surprise-button" onClick={handleOpen}>
        🎁 Open Surprise!
      </button>

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        {selectedCard && (
          <div className="card">
            <img src={selectedCard.photo} alt="Memory" className="photo-frame" />
            <p className="message">{selectedCard.message}</p>
            <button className="close-button" onClick={() => setIsOpen(false)}>Close</button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default SurpriseCard;