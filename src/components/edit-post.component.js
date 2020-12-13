import React, { Component } from 'react';
import axios from 'axios';

export default class EditPost extends Component {
    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeBody = this.onChangeBody.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            title: '',
            body: '',
            users: []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/posts/'+this.props.match.params.id)
        .then(res => {
            this.setState({
                username: res.data.username,
                title: res.data.title,
                body: res.data.body
            })
        })
        .catch()


        axios.get('http://localhost:5000/users/')
            .then(res => {
                if(res.data.length > 0){
                    this.setState({
                        users: res.data.map(user => user.username),
                    })
                }
            })
    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        })
    }

    onChangeTitle(e){
        this.setState({
            title: e.target.value
        })
    }

    onChangeBody(e){
        this.setState({
            body: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        const post = {
            username: this.state.username,
            title: this.state.title,
            body: this.state.body,
        }

        console.log(post);

        axios.post('http://localhost:5000/posts/update/'+this.props.match.params.id, post)
        .then(res => console.log(res.data));

        window.location = '/';
    }

    render() { 
        return ( 
            <div className="container">
                <h3>Edit Post</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Username:</label>
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}>
                                {
                                    this.state.users.map(function (user) {
                                    return <option
                                                key={user}
                                                value={user}>{user}</option>
                                    })
                                }
                            </select>
                    </div>

                    <div className="form-group">
                        <label>Title:</label>
                        <input className="form-control" 
                                type="text" 
                                required
                                value={this.state.title} 
                                onChange={this.onChangeTitle} />
                    </div>

                    <div className="form-group">
                    <label>Body:</label>
                        <textarea className="form-control" cols="10" rows="5"
                                required
                                onChange={this.onChangeBody}
                                value={this.state.body}
                                ></textarea>
                    </div>
                    
                    <div className="form-group">
                        <input type="submit" value="Edit Post" className="btn btn-primary" />
                    </div>

                </form>
            </div>
         );
    }
}