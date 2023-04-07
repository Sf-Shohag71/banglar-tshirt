import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const tshirts = useLoaderData();
    return (
        <div>
            <h3>Total Tshirts: {tshirts.length}</h3>
        </div>
    );
};

export default Home;