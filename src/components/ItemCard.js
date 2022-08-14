import React from "react";
import icon from "../images/icon.png";

const ItemCard = (props) => {
  const { code, product_name, generic_name } = props.Data;
  return (
    <div className="Item">
      <img className="ui image" src={icon} alt="icon" />
      <div className="content">
        <div className="header">{product_name}</div>
        <div>({generic_name})</div>
      </div>
    </div>
  );
};

export default ItemCard;
