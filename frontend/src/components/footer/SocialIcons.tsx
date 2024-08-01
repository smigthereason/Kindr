import React from "react";
import './SocialIcons.css';

interface Icon {
  name: string;
  link: string;
}

interface SocialIconsProps {
  Icons: Icon[];
}

const SocialIcons: React.FC<SocialIconsProps> = ({ Icons }) => {
  return (
    <div className="social-icons-container">
      {Icons.map((icon) => (
        <span
          key={icon.name}
          className="social-icon"
        >
          <ion-icon name={icon.name}></ion-icon>
        </span>
      ))}
    </div>
  );
};

export default SocialIcons;
