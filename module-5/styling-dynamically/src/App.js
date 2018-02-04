import React, {Component} from 'react';
import Person from './Person/Person';
import './App.css';
import Radium, {StyleRoot} from 'radium';

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
     * @param personId
     */
    deletePersonHandler = (personId) => {
        //const persons = this.state.persons;
        const persons = [...this.state.persons];
        persons.splice(personId, 1);
        this.setState({persons: persons});
    };

    render() {

        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid black',
            padding: '8px',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        };

        const resetButtonStyle = {...style};
        resetButtonStyle.backgroundColor = 'grey';
        resetButtonStyle[':hover'] = {
            backgroundColor: 'lightgrey',
            color: 'black'
        };

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
            // Update style dynamically
            style.backgroundColor = 'red';
            style[':hover'] = {
                backgroundColor: 'salmon',
                color: 'black'
            }
        }

        // Assign classes dynamically
        const classes = [];
        if (this.state.persons.length <= 2) {
            classes.push('red'); // classes = [red]
        }
        if (this.state.persons.length <= 1) {
            classes.push('bold'); // classes = [bold]
        }

        return (
            <StyleRoot>
                <div className="App">
                    <h1>Hi, I'm a React App</h1>
                    <p className={classes.join(' ')}>This is really working!!! :D:D</p>
                    <button key="toggle-button" style={style} className={"App-button"}
                            onClick={this.togglePersonsHandler}>
                        Toggle persons
                    </button>
                    <button key="reset-button" style={resetButtonStyle} className={"App-button"}
                            onClick={this.resetNamesHandler}>Reset names
                    </button>
                    {persons}
                </div>
            </StyleRoot>
        );
    }
}

export default Radium(App);
