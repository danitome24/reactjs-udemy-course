import React, {Component} from 'react';

// Import CSS
import "./Person.css";

class Person extends Component {


    render() {
        return (
            <div className={"Person"}>
                <p>I'm a {this.props.name} and I'm {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
                <button onClick={this.props.click}>X</button>
            </div>
        )
    }

}

export default Person;
