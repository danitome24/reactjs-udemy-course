import React, {Component} from 'react';

class UserOutput extends Component {

    render() {
        return (
            <div>
                <p>{this.props.username}s</p>
                <p>This will change</p>
            </div>
        );
    }
}

export default UserOutput;
