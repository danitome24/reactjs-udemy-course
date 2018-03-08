import React, {Component} from 'react';
import './Blog.css';
import Posts from "../Posts/Posts";
import {Route, NavLink, Redirect} from 'react-router-dom';
//import NewPost from "../NewPost/NewPost";
import {Switch} from "react-router";
import asyncComponent from "../../hoc/asyncComponent";

const AsyncNewPost = asyncComponent(() => {
    return import('../NewPost/NewPost');
});

class Blog extends Component {
    state = {
        auth: false
    };

    render() {
        return (
            <div className={"Blog"}>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to={"/"} exact>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    {/*<Route path={"/"} exact render={() => <h1>Home</h1>}/>
                    <Route path={"/new-post"} exact render={() => <h1>New Post</h1>}/>*/}
                    <Route path={"/posts"} component={Posts}/>
                    {this.state.auth ? <Route path={"/new-post"} exact component={AsyncNewPost}/> : null}
                    <Route render={() => <h1>Not found</h1>}/>
                    /*<Redirect from={"/"} to={"/posts"}/>*/
                </Switch>
            </div>
        );
    }
}

export default Blog;