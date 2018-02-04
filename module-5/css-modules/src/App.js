import React, {Component} from 'react';
import Person from './Person/Person';
import classes from './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            persons: [
                {id: 0, name: "Max", age: 28},
                {id: 1, name: "Manu", age: 29},
                {id: 2, name: "Eva", age: 25},
            ],
            showPersons: false,
        }

    }

    /**
     * Switch name to Person component
     */
    switchNameHandler = (event, personId) => {
        const personIndex = this.state.persons.findIndex((person) => {
            return person.id === personId;
        });
        const person = {...this.state.persons[personIndex]};

        if (person) {
            var newPerson = {
                id: personId,
                name: event.target.value,
                age: person.age
            };

            const persons = [...this.state.persons];
            persons[personIndex] = newPerson;

            this.setState({persons: persons});
        }
    };

    /**
     * Reset names
     */
    resetNamesHandler = () => {
        this.setState({
            persons: [
                {id: 0, name: "Max", age: 28},
                {id: 1, name: "Manu", age: 29},
                {id: 2, name: "Eva", age: 25},
            ]
        })
    };

    /**
     * Toggle persons list
     * @param event
     */
    togglePersonsHandler = (event) => {
        this.setState({
            showPersons: !this.state.showPersons
        })
    };

    /**
     * Delete a person from list
     * @param personPosition
     */
    deletePersonHandler = (personPosition) => {
        //const persons = this.state.persons;
        const persons = [...this.state.persons];
        persons.splice(personPosition, 1);
        this.setState({persons: persons});
    };

    render() {
        let persons = null;
        let btnClass = '';

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person click={() => this.deletePersonHandler(index)}
                                       name={person.name}
                                       age={person.age}
                                       key={person.id}
                                       changed={(event) => this.switchNameHandler(event, person.id)}/>
                    })}
                </div>
            );

            btnClass = classes.Red;
        }

        // Assign classes dynamically
        const assignedClasses = [];
        if (this.state.persons.length <= 2) {
            assignedClasses.push(classes.red); // classes = [red]
        }
        if (this.state.persons.length <= 1) {
            assignedClasses.push(classes.bold); // classes = [bold]
        }

        return (
            <div className={classes.App}>
                <h1>Hi, I'm a React App</h1>
                <p className={assignedClasses.join(' ')}>This is really working!!! :D:D</p>
                <button key="toggle-button" className={btnClass}
                        onClick={this.togglePersonsHandler}>
                    Toggle persons
                </button>
                <button key="reset-button"
                        onClick={this.resetNamesHandler}>Reset names
                </button>
                {persons}
            </div>
        );
    }
}

export default App;
