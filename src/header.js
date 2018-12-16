import React ,{Component} from 'react' ;

export default class Header extends Component  {

 render(){
    return(
      <div className="nav">
        <a className="nav-link active" href="hjh">Active</a>
        <a className="nav-link" href="hj">Link</a>
        <a className="nav-link" href="jj">Link</a>
        <a className="nav-link disabled" href="jh">Disabled</a>
        </div>
    )
  }
 }
