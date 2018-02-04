import React, {Component} from 'react';

// Import CSS
import classes from "./Person.css";
import withClass from "../../../hoc/withClass";
import Aux from "../../../hoc/Aux";
import PropTypes from "prop-types";

class Person extends Component {

    componentWillMount() {
        console.log('[Person.js]: Inside component will mount');
    }

    componentDidMount() {
        console.log('[Person.js]: Inside component did mount');
    }

    render() {
        return (
            <Aux>
                <p>I'm a {this.props.name} and I'm {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
                <button onClick={this.props.click}>X</button>
            </Aux>
        )
    }

}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func,
};

export default withClass(Person, classes.Person);
