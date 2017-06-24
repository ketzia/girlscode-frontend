import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Home from './components/Home/main';
import About from './components/About/main';
import NavBar from './components/NavBar/main';
import User from './components/Users/index';
import createUser from './components/Users/create/create';
import Blog from './components/Blog/index/index';
import createPost from './components/Blog/create/create';
import Body from './components/Blog/view/body';
import Profile from './components/Users/view/profile';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
          <div>
              <NavBar/>
                <Route exact path="/" component={Home}/>
                <Route  path="/about" component={About}/>
                <Route exact path="/blog" component ={Blog}/>
                <Route path="/users" component={User}/>
                <Route exact path="/register" component={createUser}/>
                <Route exact path="/blog/create" component={createPost}/>
                <Route exact path="/blog/view/:id" component={Body}/>
                <Route exact path="/user/:id" component={Profile}/>
           </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
