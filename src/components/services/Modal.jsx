import React from "react";
import "./Modal.scss";
import { useState } from "react";


function Modal({ isOpen, onClose, category, data }) {
    const [selectedMonth, setSelectedMonth] = useState(null);
    const [isImageModalOpen, setIsImageModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
  
  
    const handleClick = (month) => {
      setSelectedMonth(month);
    };

    const toggleImageModal = (imageUrl) => {
      if (isImageModalOpen) {
        setIsImageModalOpen(false);
      } else {
        setSelectedImage(imageUrl);
        setIsImageModalOpen(true);
      }
    };
    const closeImageModal = () => {
      setIsImageModalOpen(false);
  };
  
    return (
      isOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={onClose}>
              &times;
            </button>
            <h1>{category}</h1>
            {selectedMonth ? (
              <div>
                <p onClick={() => setSelectedMonth(null)}>{selectedMonth}
                    <div className="item-content">{data[selectedMonth].description}</div>
                    <img src={data[selectedMonth].imageUrl} alt="" onClick={() => toggleImageModal(data[selectedMonth].imageUrl)} />
                    <h6>Back</h6>
                </p>
              </div>
            ) : (
              Object.keys(data).map((month) => (
                <p key={month} onClick={() => handleClick(month)}>
                  {month}
                </p>
              ))
            )}
          </div>

          {/* Image Modal */}
          {isImageModalOpen && (
            <div className="image-modal" onClick={() => setIsImageModalOpen(false)}>
              <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
                <img className="image-modal-img" src={selectedImage} alt="" style={{ cursor: 'pointer' }} onClick={closeImageModal}/>
              </div>
            </div>
          )}
        </div>
      )
    );
  }

  export default Modal;
