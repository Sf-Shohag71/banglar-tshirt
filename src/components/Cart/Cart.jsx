import React from "react";
import './Cart.css'

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
      {
        cart.length > 2 ? <span>aro kino</span> : <span>Fokira</span>
      }
        {msg}
      <h4 className={cart.length == 2 ? 'black' : 'green'}>This is cart summary: {cart.length}</h4>
      <h4 className={`green ${cart.length > 3 ? 'purple': 'orange'}`}>Product Name</h4>
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
            {tshirt.name}
            <button onClick={()=>handleRemoveFromCart(tshirt._id)}>X</button>
        </p>
      ))}
      {
        cart.length === 3 && <span>You select three products</span>
      }
      {
        cart.length === 3 || <span>You doesn't select three products</span>
      }
    </div>
  );
};

export default Cart;
