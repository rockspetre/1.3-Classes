import React, {useState} from "react";
import "./googleStyles.css";

export default function GoogleFooter({location}) {
  const [test, updateTest] = useState('test');

  function updatesValue(){
    updateTest('test2')
  }
  return (
    <div className="googleFooter">
      <p>{test}</p>
      <button onClick={()=> updatesValue()}>Change value</button>
        <div className="shadedDiv">
            <span>{location}</span>
        </div>
        <hr />
      <div className="shadedDiv horizontal spaceout">
        <div className="left">
          <span>Advertising</span>
          <span>Business</span>
          <span>How search works</span>
        </div>

        <div className="right">
          <span>Privacy</span>
          <span>Terms</span>
          <span>Settings</span>
        </div>
      </div>
    </div>
  );
}
