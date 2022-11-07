import React from "react";

export default class LoginClassComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      userInput: null
    }
  }
  render() {
    return (
      <div className="logindiv">
        <input onChange={(e) => this.setState({userInput: e.target.value})} className="logininput" placeholder="User name" />
        <p>{this.state.userInput}</p>
        <br />
        <input className="logininput" placeholder="Password" />
        <br />
        <button className="loginbutton">Login now</button>
      </div>
    );
  }
}
