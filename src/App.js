import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/navbar.component";
import PostList from "./components/post-list.component";
import EditPost from "./components/edit-post.component";
import CreatePost from "./components/create-post.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <Navbar />
        <br />
        <Route path="/" exact component={PostList} />
        <Route path="/edit/:id" exact component={EditPost} />
        <Route path="/create-post" exact component={CreatePost} />
        <Route path="/create-user" exact component={CreateUser} />
    </Router>
  );
}

export default App;
