// src/components/Projects.js

import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div>
            <h1>Our Projects</h1>
            {/* Links for each project */}
            <div>
                <Link to="/projects/project1">Project 1</Link>
                <Link to="/projects/project2">Project 2</Link>
                <Link to="/projects/project3">Project 3</Link>
                {/* Add more links for additional projects */}
            </div>
        </div>
    );
};

export default Projects;
