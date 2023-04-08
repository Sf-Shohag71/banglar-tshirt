import React, { createContext, useState } from "react";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import "./Grandpa.css";

export const ringContext = createContext("Gold");
export const MoneyContext = createContext(0);
const Grandpa = () => {
  const [money, setMoney] = useState(0);
  return (
    <div className="grandpa">
      <h3>Grandpa</h3>
      <p>Has Money: {money}</p>
      <MoneyContext.Provider value={[money, setMoney]}>
        <ringContext.Provider value="Golden Ring">
          <section className="flex">
            <Father></Father>
            <Uncle></Uncle>
            <Aunty></Aunty>
          </section>
        </ringContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default Grandpa;
