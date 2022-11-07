import React from "react";
import GoogleHeader from "./GoogleHeader";
import GoogleBody from "./GoogleBody";
import GoogleFooter from "./GoogleFooter";

export default function GooglePage(){
    const getLocation = () => {
        return "Germany"
    }

    function greetUser(){
        alert("Welcome to Google")
    }

    const TextComponent = () => (<p>I am a text</p>)
    return (
        <div>
            <GoogleHeader />
            <GoogleBody name="I am  prop" greetUser={greetUser} CustomComp={TextComponent} />
            <GoogleFooter location={getLocation()} />
        </div>
    )
}