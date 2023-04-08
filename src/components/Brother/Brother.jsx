import React, { useContext } from 'react';
import { MoneyContext, ringContext } from '../Grandpa/Grandpa';

const Brother = () => {
    const [money, setMoney] = useContext(MoneyContext);
    const Ring = useContext(ringContext);
    return (
        <div>
            <h4>Brother</h4>
            <p><small>Grandpa's Money: {money}</small></p>
            <button onClick={() => setMoney(money+1000)}>Send 1k</button>
            <p><small>{Ring}</small></p>
        </div>
    )
};

export default Brother;