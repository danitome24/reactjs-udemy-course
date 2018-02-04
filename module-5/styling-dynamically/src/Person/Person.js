import React, {Component} from 'react';
import Radium from 'radium';

// Import CSS
import "./Person.css";

class Person extends Component {

    render() {
        const style = {
            '@media(min-width: 500px)': {
                width: '450px',
            }
        };

        return (
            <div className={"Person"} style={style}>
                <p>I'm a {this.props.name} and I'm {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
                <button onClick={this.props.click}>X</button>
            </div>
        )
    }

}

export default Radium(Person);
