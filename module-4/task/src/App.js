import React, {Component} from 'react';
import Validation from './Validation/Validation';
import './App.css';
import Char from "./Char/Char";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            textLength: 0,
            text: "",
        }
    }

    displayTextLengthHandler = (event) => {
        this.setState({textLength: event.target.value.length});
        this.setState({text: event.target.value});
    };

    removeCharHandler = (charPos) => {
        var text = this.state.text;
        var newStr = text.substring(0, charPos - 1) + text.substring(charPos, text.length);

        this.setState({text: newStr, textLength: newStr.length});
    };

    render() {


        var chars = [];
        const text = this.state.text;
        for (var i = 0; i < text.length; i++) {
            chars.push(<Char onclick={this.removeCharHandler} position={i} key={i} char={text[i]}/>);
        }

        return (
            <div className="App">
                <ol>
                    <li>Create an input field (in App component) with a change listener which outputs the length of the
                        entered text below it (e.g. in a paragraph).
                    </li>
                    <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
                    <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending
                        on the text length (e.g. take 5 as a minimum length)
                    </li>
                    <li>Create another component (=> CharComponent) and style it as an inline box (=> display:
                        inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).
                    </li>
                    <li>Render a list of CharComponents where each CharComponent receives a different letter of the
                        entered text (in the initial input field) as a prop.
                    </li>
                    <li>When you click a CharComponent, it should be removed from the entered text.</li>
                </ol>
                <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
                <hr/>
                <input onChange={(event) => this.displayTextLengthHandler(event)} value={this.state.text}/>
                <p>Text length: {this.state.textLength}</p>
                <Validation length={this.state.textLength}/>
                {chars}
            </div>
        );
    }
}

export default App;
