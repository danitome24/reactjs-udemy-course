import React, {Component} from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            post: null,
        }
    }

    componentDidUpdate() {
        if (null === this.props.postId) {
            console.log('ERROR: No post id provided');
            return;
        }

        if (!this.state.post || (this.state.post && (this.state.post.id !== this.props.postId))) {
            axios.get('/posts/' + this.props.postId)
                .then((response) => {
                    this.setState({post: response.data});
                })
                .catch((error) => {
                    console.log(error);
                });
        }

    };

    deletePostHandler = () => {
        axios.delete('/posts/' + this.props.postId)
            .then((response) => {
                console.log(response);
            });
    };

    render() {
        let post = <div className={"FullPost"}><p>Please select a Post!</p></div>;

        if (this.props.postId) {
            post = <div className={"FullPost"}><p>Loading...</p></div>;
        }

        if (this.state.post) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.post.title}</h1>
                    <p>{this.state.post.body}</p>
                    <div className="Edit">
                        <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                    </div>
                </div>

            );
        }

        return post;
    }
}

export default FullPost;