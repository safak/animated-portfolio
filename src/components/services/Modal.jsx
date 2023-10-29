import React from "react";
import styles from "./Modal.scss";
import { useState } from "react";


function Modal({ isOpen, onClose }) {
    const [selectedMonth, setSelectedMonth] = useState(null);
  
    const monthInfo = {
        'OCT 2023 Postgraduate Industry Experience Winner': {
          description: 'Student Vote Postgraduate Industry Experience Winner',
          imageUrl: "/people.webp",  // Replace with the actual path to your image
        },
        'SEP 2023': {
          description: 'Details about September 2023',
          imageUrl: "/people.webp",  // Replace with the actual path to your image
        },
        'MAR 2023': {
          description: 'Details about March 2023',
          imageUrl: "/people.webp",  // Replace with the actual path to your image
        },
      };
  
    const handleClick = (month) => {
      setSelectedMonth(month);
    };
  
    return (
      isOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={onClose}>
              &times;
            </button>
            <h1>Honors</h1>
            {selectedMonth ? (
              <div>
                <p onClick={() => setSelectedMonth(null)}>{selectedMonth}
                    <div className="item-content">{monthInfo[selectedMonth].description}</div>
                    {/* <img src={monthInfo[selectedMonth].imageUrl} alt="" /> */}
                    <h6>Back</h6>
                </p>
                
              </div>
            ) : (
              Object.keys(monthInfo).map((month) => (
                <p key={month} onClick={() => handleClick(month)}>
                  {month}
                </p>
              ))
            )}
            
          </div>
        </div>
      )
    );
  }
  
  

export default Modal;