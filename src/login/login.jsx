import React ,{Component} from 'react';

export default class Login extends Component{
  constructor(props){
    super(props);
    this.state={
      name:'',
      username:'',
      password:'',

    }
  }
  render(){
    return(
      <React.Fragment>

      <div className="login">
        <form>
            <div className="form-group">
              <h1>Login Form</h1>
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
              <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <div className="signup">
              <a href="signup" >signup</a>
              <a href="forgotpassword" >forgot password</a>
            </div>
            <div className="submit">
            <button type="submit" className="btn btn-primary">Submit</button>
            </div>
            
        </form>
        
      </div>  
      </React.Fragment>

    )
  }
}