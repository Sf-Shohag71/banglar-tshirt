import React from 'react';
import './Tshirt.css'

const Tshirt = ({tshirt, handleAddtoCart}) => {
    const {_id, price, picture, name} = tshirt;
    return (
        <div className='tshirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <button onClick={()=>handleAddtoCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default Tshirt;