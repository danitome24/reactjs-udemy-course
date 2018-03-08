import React, {Component} from 'react';

import './Courses.css';
import {Link} from "react-router-dom";

class Courses extends Component {
    state = {
        courses: [
            {id: 1, title: 'Angular - The Complete Guide'},
            {id: 2, title: 'Vue - The Complete Guide'},
            {id: 3, title: 'PWA - The Complete Guide'}
        ]
    }

    render() {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map(course => {
                            return (
                                <Link key={course.id} to={{
                                    pathname: "/courses/" + course.id,
                                    search: '?' + course.title
                                }}>
                                    <article className="Course" >{course.title}</article>
                                </Link>
                            );
                        })
                    }
                </section>
            </div>
        );
    }
}

export default Courses;