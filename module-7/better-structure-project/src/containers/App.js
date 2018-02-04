import React, {Component} from 'react';
import classes from './App.css';
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import Aux from "../hoc/Aux";
import withClass from "../hoc/withClass";

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
            toggleClickedCounter: 0,
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
        this.setState((prevState, props) => {
            return {
                showPersons: !this.state.showPersons,
                toggleClickedCounter: prevState.toggleClickedCounter + 1,
            };
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

        if (this.state.showPersons) {
            persons = (
                <div>
                    <Persons persons={this.state.persons}
                             clicked={this.deletePersonHandler}
                             changed={this.switchNameHandler}/>
                </div>
            );
        }

        return (
            <Aux>
                <button onClick={() => {
                    this.setState({showPersons: true})
                }}>Show persons
                </button>
                <Cockpit persons={persons}
                         showPersons={this.state.showPersons}
                         toggle={this.togglePersonsHandler}
                         reset={this.resetNamesHandler}/>
                {persons}
            </Aux>
        );
    }
}

export default withClass(App, classes.App);
