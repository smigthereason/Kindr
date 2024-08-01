import React from "react";
import './Item.css';

interface Link {
  name: string;
  link: string;
}

interface ItemProps {
  Links: Link[];
  title: string;
}

const Item: React.FC<ItemProps> = ({ Links, title }) => {
  return (
    <ul>
      <h1 className="item-title">{title}</h1>
      {Links.map((link) => (
        <li key={link.name}>
          <a
            className="item-link"
            href={link.link}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Item;
