import React, {Component} from 'react';

class Char extends Component {

    render() {
        return (
            <div>
                <p onClick={() => this.props.onclick(this.props.position)}>{this.props.char}</p>
            </div>
        );
    }

}

export default Char;