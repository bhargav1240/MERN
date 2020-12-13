import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">BD-Blog</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">All Posts</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create-post" className="nav-link">Create Post</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create-user" className="nav-link">Create User</Link>
                        </li>
                    </ul>
                </div>
            </nav>
         );
    }
}
 
export default Navbar;