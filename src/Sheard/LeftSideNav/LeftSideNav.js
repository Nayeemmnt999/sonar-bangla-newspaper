import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [sideNav, setSideNav] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/news-catagori')
            .then(res => res.json())
            .then(data => setSideNav(data))
    })
    return (
        <div>
            <h1>this is left side nav</h1>
            {
                sideNav.map(navData => <p key={navData.id}>
                    <Link to={`/catagory/${navData.id}`}>{navData.name}</Link>

                </p>)
            }
        </div>
    );
};

export default LeftSideNav;