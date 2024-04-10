import React from 'react';


const ToolCard = ({ name, description, imageSrc }) => {
  return (
    <div className="tool-card">
      <img src={imageSrc} alt={name} className="tool-image" />
      <div className="tool-info">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ToolCard;
