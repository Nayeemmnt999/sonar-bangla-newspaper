import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Catagory = () => {
    const news = useLoaderData()
    return (
        <div>
            <h3>this is cataotry { news.length}</h3>
        </div>
    );
};

export default Catagory;