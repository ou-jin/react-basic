import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Main from '../views/main'
import Test from '../views/test'
import React from 'react'
export default () => (
    <Router>
        <Switch>
            <Route path="/" component={Main} />
            <Route path="/test" component={Test} />
        </Switch>


    </Router>
)
