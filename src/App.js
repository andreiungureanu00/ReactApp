import "./styles/App.css";
import Popup from "./aux_layouts/Pop-up.js";
import EscapeListener from "./listeners/EscapeListener.js";
import MainCell from "./layout_cells/MainCell.js";
import PopupCell from "./layout_cells/PopupCell.js";
import { useState, useEffect } from "react";

const fetchUrl =
  "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts";

function App() {
  const [data, setData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [objectID, setID] = useState(null);

  const getData = () => fetch(`${fetchUrl}`).then((res) => res.json());

  EscapeListener(() => {
    setIsOpen(false);
  });

  useEffect(() => {
    getData().then((data) => setData(data));
  }, []);

  function togglePopup(id) {
    setIsOpen(!isOpen);
    setID(id);
  }

  return (
      <div className="row">
        {isOpen && (
          <Popup
            content={
              <div>
                {data?.map((item) => {
                  if (item.id == objectID) {
                    return <PopupCell item={item} />;
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
              return <MainCell item={item} togglePopup={togglePopup} />;
            }
          })}
        </div>
        <div className="column">
          {data?.map((item, i) => {
            if (i % 2 == 1)
              return <MainCell item={item} togglePopup={togglePopup} />;
          })}
        </div>
      </div>
  );
}

export default App;
