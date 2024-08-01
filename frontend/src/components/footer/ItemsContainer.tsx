import React from "react";
import Item from "./Item";
import {  COMPANY, SUPPORT } from "./Menu";
import './ItemsContainer.css';

const ItemsContainer: React.FC = () => {
  return (
    <div className="items-container">
      {/* <Item Links={PRODUCTS} title="PRODUCTS" /> */}
      {/* <Item Links={RESOURCES} title="RESOURCES" /> */}
      <Item Links={COMPANY} title="COMPANY" />
      <Item Links={SUPPORT} title="SUPPORT" />
    </div>
  );
};

export default ItemsContainer;
