import React, {useState} from "react";
import './logincss.css'

const Loginpage = () => {
  const [email, updateEmail] = useState(null)
  const [password, updatePassword] = useState(null)
  const [isError, updateIsError] = useState(false)
  const [errorMessage, updateErrorMessage] = useState('');
  
  function doLogin(){
    if(!email || !password){
      updateIsError(true)
      updateErrorMessage('Email or password is wrong')
      return
    }
    if(!email.includes('@')){
      updateIsError(true)
      updateErrorMessage('Email is not valid')
      return
    }
    if(password.length < 8){
      updateIsError(true)
      updateErrorMessage('Password length is less than 8')
      return
    }
    alert('Login successful')
  }
  return (
    <div className="logindiv">
      <input onChange={(e) => updateEmail(e.target.value)} className="logininput" placeholder="Email" />
      <br />
      <input onChange={(e) => updatePassword(e.target.value)} className="logininput" placeholder="Password" />
      <br />
      <button onClick={() => doLogin()} className="loginbutton">Login now</button>
      {
        isError ? <p className="error">{errorMessage}</p> : null
      }
    </div>
  );
}

export default Loginpage
