import { useState } from "react";
import "./project.css";
const TabNavigation = (props) => {
  const [activeTab, setActiveTab] = useState("All");
  const buttons = ["All", "React", "Javascript"];

  //set btn-tab active which is clicked
  const handelBtnClick = (tab) => {
    setActiveTab(tab);
    // eslint-disable-next-line react/prop-types
    props.filterItems(tab);
  };

  return (
    <div className="tab__container">
      {buttons.map((button, index) => {
        return (
          <button
            key={index}
            className={`tab ${activeTab === button ? "active" : ""}`}
            onClick={() => {
              handelBtnClick(button);
            }}
          >
            {button}
          </button>
        );
      })}
    </div>
  );
};

export default TabNavigation;
