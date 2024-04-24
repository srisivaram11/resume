// src/components/Homepage.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router if you're using it for navigation

const Homepage = () => {
    return (
        <div>
            <h1>Welcome to Our Portfolio</h1>
            {/* Links for each team member */}
            <div>
                <Link to="/athi">Athi</Link>
                <Link to="/ritthyk">Ritthyk</Link>
                <Link to="/sri">Sri</Link>
            </div>
            {/* Link for projects */}
            <div>
                <Link to="/projects">View Our Projects</Link>
            </div>
        </div>
    );
};

export default Homepage;
