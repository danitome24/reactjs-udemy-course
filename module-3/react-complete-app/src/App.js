import React, {Component} from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            persons: [
                {name: "Max", age: 28},
                {name: "Manu", age: 29},
                {name: "Eva", age: 25},
            ]
        }

    }

    /**
     * Switch name to Person component
     */
    switchNameHandler = (newName) => {
        //console.log("Was clicked!");
        // DON'T DO THIS: this.state.persons[0].name = "Dani";
        this.setState({
            persons: [
                {name: newName, age: 17},
                {name: "Manu Jr.", age: 13},
                {name: "Eva Jr.", age: 9},
            ]
        });
    };

    /**
     * Reset names
     */
    resetNamesHandler = () => {
        this.setState({
            persons: [
                {name: "Max", age: 28},
                {name: "Manu", age: 29},
                {name: "Eva", age: 25},
            ]
        })
    };

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {name: "Max", age: 28},
                {name: event.target.value, age: 29},
                {name: "Eva", age: 25},
            ]
        })
    };

    render() {
        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <button className={"App-button"} onClick={this.switchNameHandler.bind(this, 'Perico!')}>Switch name</button>
                <button className={"App-button"} onClick={this.resetNamesHandler}>Reset names</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangedHandler}/>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
            </div>
        );
    }
}

export default App;

/**
 * Props: Give us access to given attributes we pass to our components (from outside).
 * State: Store data inside a class. If it changes, React will re-render our DOM (from inside).
 */
