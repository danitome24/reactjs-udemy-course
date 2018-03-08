import React, {Component} from 'react';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import {Switch} from "react-router";
import Course from "./containers/Course/Course";

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route path={"/users"} component={Users}/>
                            <Route path={"/courses/:id"} component={Course}/>
                            <Route path={"/courses"} component={Courses}/>
                        </Switch>
                        <nav>
                            <ul>
                                <li><NavLink to={"/users"} exact>Users</NavLink></li>
                                <li><NavLink to={"/courses"} exact>Courses</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                </BrowserRouter>
                <div className="App">
                    <ol style={{textAlign: 'left'}}>
                        <li>Pass the course title to the "Course" page - pass it as a param or score bonus points by
                            passing it as query params (you need to manually parse them though!)
                        </li>
                        <li>Load the "Course" component as a nested component of "Courses"</li>
                        <li>Add a 404 error page and render it for any unknown routes</li>
                        <li>Redirect requests to /all-courses to /courses (=> Your "Courses" page)</li>
                    </ol>
                </div>
            </div>
        );
    }
}

export default App;
