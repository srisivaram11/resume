// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage';
import Projects from './components/Projects';
import Athi from './components/athi'; // Import Athi component
import Ritthyk from './components/ritthyk'; // Import Ritthyk component
import Sri from './components/sri'; // Import Sri component

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/projects" component={Projects} />
                {/* Routes for each team member */}
                <Route exact path="/athi" component={Athi} />
                <Route exact path="/ritthyk" component={Ritthyk} />
                <Route exact path="/sri" component={Sri} />
            </Switch>
        </Router>
    );
};

export default App;
