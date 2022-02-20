import React, { useContext } from "react";
import { MoveContext } from "../../utils/contexts/MoveContext";

//style
import "./showMoves.css";

const ShowMoves = () => {
  const [moves] = useContext(MoveContext);
  console.log(moves);

  return (
    <div className="card">
      {moves.map((move) => (
        <div className="cardDiv" key={move.id}>
          <p className="name">Name: {move.name}</p>
          <p className="id">Id: {move.id}</p>
          <p className="price">Price: {move.price}$</p>
        </div>
      ))}
    </div>
  );
};

export default ShowMoves;
