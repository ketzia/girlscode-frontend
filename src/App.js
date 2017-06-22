import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Home from './components/Home/main';
import About from './components/About/main';
import NavBar from './components/NavBar/main';
import Post from './components/Posts/index';
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
                <Route path="/blog" component ={Post}/>
           </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
