import React, {Component} from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';

class Cockpit extends Component {

    render() {
        let btnClass = '';
        let showPersons = this.props.showPersons;

        if (showPersons) {
            btnClass = classes.Red;
        }

        // Assign classes dynamically
        const assignedClasses = [];
        if (showPersons && this.props.persons.length <= 2) {
            assignedClasses.push(classes.red); // classes = [red]
        }
        if (showPersons && this.props.persons.length <= 1) {
            assignedClasses.push(classes.bold); // classes = [bold]
        }

        return <div className={classes.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className={assignedClasses.join(' ')}>This is really working!!!:D:D</p>
            <button
                key="toggle-button"
                className={btnClass}
                onClick={this.props.toggle}>
                Toggle persons
            </button>
            < button
                key="reset-button"
                onClick={this.props.reset}>
                Reset names
            </button>
        </div>

    };
}

export default Cockpit;
