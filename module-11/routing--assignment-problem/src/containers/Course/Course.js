import React, { Component } from 'react';

class Course extends Component {
    render () {
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.location.search}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;