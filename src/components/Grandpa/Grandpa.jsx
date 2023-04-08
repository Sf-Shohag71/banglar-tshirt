import React, { createContext } from "react";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import "./Grandpa.css";

export const ringContext = createContext("Gold");
const Grandpa = () => {
  return (
    <div className="grandpa">
      <h3>Grandpa</h3>
      <ringContext.Provider value="Golden Ring">
        <section className="flex">
          <Father></Father>
          <Uncle></Uncle>
          <Aunty></Aunty>
        </section>
      </ringContext.Provider>
    </div>
  );
};

export default Grandpa;
