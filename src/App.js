import React, { Component } from 'react';
import Login from './login/login';
import Signup from './signup/signup';
import {Route,Switch} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <React.Fragment> 
      <Switch>
      <Route path='/' exact component={Login}/>
      <Route path='/signup' exact component={Signup}/>
      </Switch>
      </React.Fragment>
      
      
    
  
      
    );
  }
}

export default App;
