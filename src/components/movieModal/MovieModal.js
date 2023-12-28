import React, { useEffect, useState } from "react";
import "./MovieModal.css";
import Modal from "react-modal";
import {
  homeData,
  latest,
  recommended,
  trending,
  upcome,
} from "../../dummyData";
import { AiOutlineClose } from "react-icons/ai";

const style = {
  overlay: {
    position: "fixed",
    backgroundColor: "transparent ",
    zIndex: "1000",
    padding: "11px",
  },
  content: {
    position: "absolute",
    background: "black",
    overflow: "hidden",
    border: "none",
    boxShadow: "0 0 0.73em rgba(0, 0, 0, 0.9)",
  },
};

function MovieModal({ closeModal, id }) {
  const [item, setItem] = useState(null);

  useEffect(() => {
    const combinedData = [
      ...homeData,
      ...trending,
      ...upcome,
      ...recommended,
      ...latest,
    ];

    const foundItem = combinedData.find((item) => item.id === parseInt(id));

    if (foundItem) {
      setItem(foundItem);
    }
  }, [id]);

  return (
    <Modal
      isOpen={true}
      onRequestClose={closeModal}
      style={style}
      ariaHideApp={false}
      shouldCloseOnOverlayClick={false}
    >
      <div className="btn">
        <AiOutlineClose onClick={closeModal} />
      </div>
      {item && (
        <div className="videoPlay">
          <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${item.embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      )}
    </Modal>
  );
}

export default MovieModal;
