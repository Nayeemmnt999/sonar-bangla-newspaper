import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeNews from './HomeNews';

const Home = () => {
    const allNews = useLoaderData()
    return (
        <div>
            <h1>this is home{allNews.length}</h1>
            {
                allNews.map(news => <HomeNews
                    key={allNews._id}
                    news={news}
                ></HomeNews>)
            }
        </div>
    );
};

export default Home;