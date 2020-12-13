import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Post = props => (
    <tr>
        <td>{props.post.username}</td>
        <td>{props.post.title}</td>
        <td>
            <Link className="btn btn-sm btn-warning" to={"/edit/" + props.post._id}>Edit</Link> | <button className="btn btn-sm btn-danger" onClick={() => { props.deletePost(props.post._id)}}>Delete</button>
        </td>
    </tr>
)

class PostList extends Component {
    constructor(props){
        super(props);

        this.deletePost = this.deletePost.bind(this);

        this.state = {
            posts:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/posts/')
        .then(res => {
            console.log(res)
            this.setState({
                posts: res.data
            })
        })
        .catch((e) => {
            console.log(e);
        })
    }

    deletePost(id){
        axios.delete('http://localhost:5000/posts/'+id)
        .then(res => {
            console.log(res);
        })

        this.setState({
            posts: this.state.posts.filter(el => el._id !== id)
        })
    }

    postList(){
        return this.state.posts.map(currentPost => {
            return <Post post={currentPost} deletePost={this.deletePost} key={currentPost._id} />;
        })
    }

    render() { 
        return (
            <div>
                <h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <td>User Name</td>
                                <td>Title</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            { this.postList() }
                        </tbody>
                    </table>
                </h3>
            </div>
        );
    }
}
 
export default PostList;