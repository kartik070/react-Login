import React ,{Component} from 'react';

export default class Signup extends Component {
  state={
    name:''
  }
  render(){
    return(
      <React.Fragment>
        <form action='/signup' method="post">
        <label htmlFor="form">Login form</label>
        <div>
        <label htmlFor="name">name</label>
        <input type="text" name="name" className="name"/>
        </div>
        <div>
        <label htmlFor="image">image</label>
        <input type="file" name="img"/>
        </div>
        <div>
        <label htmlFor="username" name="username">username</label>
        <input type="text" name="username"/>
        </div>
        <div>
        <label htmlFor="password">password</label>
        <input type="password" name="password"/>
        </div>
        <div>
          <label htmlFor="confirm">Confirm password</label>
          <input type="text" name="confirm"/>
        </div>

        <button>submmit</button>
        
        </form>
      </React.Fragment>
    )
  }
}