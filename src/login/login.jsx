import React ,{Component} from 'react';

export default class Login extends Component{
    
    state={
      data:null,
      name:'',
      username:'',
      password:'',
    }
  
   componentDidMount(){
      this.getApiCall()
      .then((res)=>
        this.setState({data:res.express}))
      .catch((err)=>console.log(err,'ll'))
  }
  getApiCall = async ()=>{
    console.log('inner')
    const response = await fetch('/signup');
    const body =await response.json();
    if(response.status!==200){
      throw Error(body.message);
    }
    return body
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
              <p>{this.state.data}</p>
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
              <a href="signup">signup</a>
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