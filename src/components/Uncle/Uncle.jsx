import React from "react";
import Cousin from "../Cousin/Cousin";

const Uncle = () => {
  return (
    <div>
      <h4>Uncle</h4>
      <section className="flex">
        <Cousin>Boro Mia</Cousin>
        <Cousin>Choto Mia</Cousin>
        <Cousin>tanni</Cousin>
      </section>
    </div>
  );
};

export default Uncle;
