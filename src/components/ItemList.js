import React from "react";
import ItemCard from "./ItemCard";

const ItemList = (props) => {
  // console.log(props);
  const renderItemList = props.Data.map((Data) => {
    return <ItemCard Data={Data}></ItemCard>;
    
  });
  return <div className="ui celled list"> {renderItemList} </div>;
};

export default ItemList;
