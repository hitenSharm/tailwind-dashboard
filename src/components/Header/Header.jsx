import React from "react";
import "../../CSS/header.css";
const Header = () => {  
  return (
    <>
      <div className="headerContainer">
        <div className="headerTitle">Dashboard</div>
        <div className="headerInnerContainer">
          <div className="searchbar">
            <input
              type="text"
              className="searchbarInput"
              placeholder="Search..."
            />
            <img
              src='/src/SVGs/dashboard_icon.svg'
              alt="notification"
              className="searchIcon"
            />
          </div>
          <img
            src='/src/SVGs/Notification.svg'
            alt="notification"
            className="notificationIcon"
          />
          <img
            src="/src/SVGs/Profile.svg"
            className="profilePicture" 
            alt="hi"           
          />
        </div>
      </div>
    </>
  );
};

export default Header;
