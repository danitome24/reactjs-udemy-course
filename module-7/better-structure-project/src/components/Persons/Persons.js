import React, {Component} from 'react';
import Person from "./Person/Person";

class Persons extends Component {

    componentWillMount() {
        console.log('[Persons.js]: Inside component will mount');
    }

    componentDidMount() {
        console.log('[Persons.js]: Inside component did mount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('[UPDATE Persons.js] Inside component will receive props', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js] Inside shouldComponentUpdate()', nextProps, nextState);
    }

    render() {
        return this.props.persons.map((person, index) => {
            return <Person click={() => this.props.clicked(index)}
                           key={person.id}
                           name={person.name}
                           age={person.age}
                           changed={(event) => this.props.changed(event, person.id)}/>
        })
    };
}

export default Persons;
