import React from "react";
import "../styles/App.css";

const PopupCell = (props) => {
  return (
    <div className="popup_cell">
      <img src={props.item.thumbnail.large} />
      <div className="popup_title">{props.item.title}</div>
      <br></br>
      <div className="object_content">{props.item.content}</div>
      <br></br>
      <div className="row">
        {props.item.author.avatar ? (
          <div className="avatar">
            <img src={props.item.author.avatar} />
          </div>
        ) : (
          <div className="empty">
            <br></br>
          </div>
        )}
        <div className="avatar">{props.item.author.name}</div>
        <div className="avatar">{props.item.author.role}</div>
      </div>
    </div>
  );
};

export default PopupCell;
