import React, {Component} from 'react';

//import './UserInput.css';

class UserInput extends Component {

    render() {
        return (
            <div>
                <input onChange={this.props.changed} type={"text"} value={this.props.username}/>
            </div>
        );
    }
}

export default UserInput;
