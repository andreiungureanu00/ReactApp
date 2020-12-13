import React from "react";
import "../styles/App.css";

const MainCell = (props) => {
  return (
    <div className="main_cell" onClick={() => props.togglePopup(props.item.id)}>
      <div className="container">
        <img src={props.item.thumbnail.small} className="imagine" />
        <div class="overlay">
          <div class="text">Learn More</div>
        </div>
      </div>
      <div className="popup_title">{props.item.title}</div>
      <div className="object_content">{props.item.content}</div>
      <br></br>
      <div className="row">
        <div className="avatar">{props.item.author.name}</div>
        <div className="avatar">{props.item.author.role}</div>
      </div>
      <br></br>
      <br></br>
    </div>
  );
};

export default MainCell;