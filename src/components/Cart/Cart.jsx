import React from "react";

const Cart = ({ cart, handleRemoveFromCart }) => {
    let msg;
    if(cart.length === 0){
        msg = <p>Please choose your products.</p>
    }
    else{
        msg=<p>Choose more and more</p>
    }
  return (
    <div>
        {msg}
      <h4>This is cart summary: {cart.length}</h4>
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
            {tshirt.name}
            <button onClick={()=>handleRemoveFromCart(tshirt._id)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default Cart;
