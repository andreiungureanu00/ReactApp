import React from "react";
import "../styles/App.css";

const Popup = (props) => {
  return (
    <div className="popup-box">
      <div className="box">
        <div class="close-icon" onClick={props.handleClose}>
          <div class="leftright"></div>
          <div class="rightleft"></div>
        </div>
        {props.content}
      </div>
    </div>
  );
};

export default Popup;
