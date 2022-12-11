import React from "react";
import playlist from "./playlist.json";
import Card from "./Card";
import "../styles/cards.css";

const Cards = () => {
  const playlistArr = playlist;
  return (
    <div>
      {playlistArr.map((data) => {
        return (
            <Card data={data}/>
        );
      })}
    </div>
  );
};

export default Cards;
