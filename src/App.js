import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Home from './components/Home/main';
import About from './components/About/main';
import NavBar from './components/NavBar/main';
import User from './components/Users/index';
import Post from './components/Posts/index';
import PostForm from './components/Posts/form';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
          <div>
              <NavBar/>
                <Route exact path="/" component={Home}/>
                <Route  path="/about" component={About}/>
                <Route exact path="/blog" component ={Post}/>
                <Route path="/users" component={User}/>
                <Route exact path="/blog/create" component={PostForm}/>
           </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
