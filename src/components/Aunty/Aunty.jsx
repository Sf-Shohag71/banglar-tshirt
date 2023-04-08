import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = () => {
    return (
        <div>
            <h4>Aunty</h4>
            <section className='flex'>
                <Cousin>Ranu Akhter</Cousin>
                <Cousin>Robel</Cousin>
            </section>
        </div>
    );
};

export default Aunty;