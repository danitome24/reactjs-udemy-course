import React, {Component} from 'react';

class Validation extends Component {

    render() {
        const minLength = 5;
        var lengthText = this.props.length >= minLength ? "Text long enough" : "Text too short";

        return (
            <div>
                <p>{lengthText}</p>
            </div>
        );
    }
}

export default Validation;
