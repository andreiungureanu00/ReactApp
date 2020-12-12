import "./App.css";
import { useState, useEffect } from "react";

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

function App() {
  const [data, setData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [objectID, setID] = useState(null);

  const fetchUrl =
    "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts";
  const getData = () => fetch(`${fetchUrl}`).then((res) => res.json());

  useEffect(() => {
    getData().then((data) => setData(data));
  }, []);

  const togglePopup = (id) => {
    setIsOpen(!isOpen);
    setID(id);
  };

  return (
    <div className="row">
      {isOpen && (
        <Popup
          content={
            <div>
              {data?.map((item) => {
                if (item.id == objectID) {
                  return (
                    <div className="popup_cell">
                      <img src={item.thumbnail.large} />
                      <div className="popup_title">{item.title}</div>
                      <br></br>
                      <div className="object_content">{item.content}</div>
                      <br></br>
                      <div className="row">
                        {item.author.avatar ? (
                          <div className="avatar">
                            <img src={item.author.avatar} />
                          </div>
                        ) : (
                          <div className="empty">
                            <br></br>
                          </div>
                        )}
                        <div className="avatar">{item.author.name}</div>
                        <div className="avatar">{item.author.role}</div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          }
          handleClose={togglePopup}
        />
      )}
      <div className="column">
        {data?.map((item, i) => {
          if (i % 2 == 0) {
            return (
              <div className="main_cell" onClick={() => togglePopup(item.id)}>
                <div className="container">
                  <img src={item.thumbnail.small} className="imagine" />
                  <div class="overlay">
                    <div class="text">Learn More</div>
                  </div>
                </div>
                <div className="popup_title">{item.title}</div>
                <div className="object_content">{item.content}</div>
                <br></br>
                <div className="row">
                  <div className="avatar">{item.author.name}</div>
                  <div className="avatar">{item.author.role}</div>
                </div>
                <br></br>
              </div>
            );
          }
        })}
      </div>
      <div className="column">
        {data?.map((item, i) => {
          if (i % 2 == 1)
            return (
              <div className="main_cell" onClick={() => togglePopup(item.id)}>
                <div className="container">
                  <img src={item.thumbnail.small} className="imagine" />
                  <div class="overlay">
                    <div class="text">Learn More</div>
                  </div>
                </div>
                <div className="popup_title">{item.title}</div>
                <div className="object_content">{item.content}</div>
                <br></br>
                <div className="row">
                  <div className="avatar">{item.author.name}</div>
                  <div className="avatar">{item.author.role}</div>
                </div>
                <br></br>
              </div>
            );
        })}
      </div>
    </div>
  );
}

export default App;
