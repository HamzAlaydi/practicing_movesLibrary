import React, { createContext, useState } from "react";

export const MoveContext = createContext();

export const MoveContextProvider = (props) => {
  const [moves, setMoves] = useState([
    {
      name: "Game Of Throns",
      id: 1234,
      price: 10,
    },
    {
      name: "Harry Pooter",
      id: 1235,
      price: 30,
    },
    {
      name: "Mission Imposible",
      id: 1236,
      price: 15,
    },
    {
      name: "Viking",
      id: 1231,
      price: 15,
    },
    {
      name: "Hone Alone",
      id: 1239,
      price: 15,
    },
  ]);

  return (
    <MoveContext.Provider value={[moves, setMoves]}>
      {props.children}
    </MoveContext.Provider>
  );
};

export default MoveContextProvider;
