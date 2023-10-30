import React from "react";
import styles from "./Modal.scss";
import { useState } from "react";


function Modal({ isOpen, onClose, category, data }) {
    const [selectedMonth, setSelectedMonth] = useState(null);
  
  
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
            <h1>{category}</h1>
            {selectedMonth ? (
              <div>
                <p onClick={() => setSelectedMonth(null)}>{selectedMonth}
                    <div className="item-content">{data[selectedMonth].description}</div>
                    {/* <img src={monthInfo[selectedMonth].imageUrl} alt="" /> */}
                    <h6>Back</h6>
                </p>
                
              </div>
            ) : (
              Object.keys(data).map((month) => (
                <p key={month} onClick={() => handleClick(month)}>
                  {month}
                </p>
            // Object.keys(data).map((month) => (
            //     <div key={month}>
            //       <p onClick={() => handleClick(month)}>
            //         {month}
            //       </p>
            //       <div className={styles.itemContent}>
            //         {data[month].description}
            //       </div>
            //       {/* <img src={data[month].imageUrl} alt="" /> */}
            //     </div>
            
              ))
            )}
            
          </div>
        </div>
      )
    );
  }

  export default Modal;
