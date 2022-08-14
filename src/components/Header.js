import React from "react";

const Header = () => {
  return (
    <>
      <div className="ui fixed menu" style={{ backgroundColor: "lightgreen" }}>
        <div className="ui container center" style={{ marginTop: "10px" }}>
          <h4>TheFoodList</h4>
        </div>
        <i class="search icon" style={{ marginTop: "10px" }}></i>
        <i class="bars icon" style={{ marginTop: "10px" }}></i>
      </div>
      
    </>
  );
};

export default Header;
