import React, {Component} from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            persons: [
                {id: 1, name: "Max", age: 28},
                {id: 2, name: "Manu", age: 29},
                {id: 3, name: "Eva", age: 25},
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
                {id: 1, name: "Max", age: 28},
                {id: 2, name: "Manu", age: 29},
                {id: 3, name: "Eva", age: 25},
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
     * @param personId
     */
    deletePersonHandler = (personId) => {
        //const persons = this.state.persons;
        const persons = [...this.state.persons];
        persons.splice(personId, 1);
        this.setState({persons: persons});
    };

    render() {

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person click={() => this.deletePersonHandler(person.id)}
                                       name={person.name}
                                       age={person.age}
                                       key={person.id}
                                       changed={(event) => this.switchNameHandler(event, person.id)}/>
                    })}
                </div>
            );
        }

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <button className={"App-button"} onClick={this.togglePersonsHandler}>Toggle persons</button>
                <button className={"App-button"} onClick={this.resetNamesHandler}>Reset names</button>
                {persons}
            </div>
        );
    }
}

export default App;
