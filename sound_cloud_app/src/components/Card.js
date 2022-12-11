import React from "react";
import "../styles/card.css";

const Card = ({ data }) => {
  return (
    <div className="card">
      <img
        src={data.artworkUrl}
        alt={data.title}
        width="200px"
        height="200px"
      />
      <div>
        {data.user.username}
        {data.title}
        {data.duration}
        {data.playback_count}
      </div>
    </div>
  );
};

export default Card;
