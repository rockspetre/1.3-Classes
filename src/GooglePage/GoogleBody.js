import React, {useState} from "react";
import GoogleImage from "./Imageee";
import "./googleStyles.css";

export default function GoogleBody({ greetUser, CustomComp }) {
  const [userInput, updateUserInput] = useState(null)

  function performSearch(){
    alert(userInput)
  }
  return (
    <div className="googleBody">
      <GoogleImage />
      <input onChange={(e) => updateUserInput(e.target.value)} className="searchInput" placeholder="Enter serch here" />
      <p>{userInput}</p>
      <div className="horizontal bodyButtonDiv">
        <button>Google search</button>
        <button onClick={() => greetUser()}>I'm feeling lucky</button>
      </div>
    </div>
  );
}
