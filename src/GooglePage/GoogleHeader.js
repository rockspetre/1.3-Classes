import React from "react";
import './googleStyles.css'

export default function GoogleHeader(){
    return (
        <div className="horizontal spaceout">
            <div className="left">
                <span>About</span>
                <span>Store</span>
            </div>

            <div className="right">
                <span>Gmail</span>
                <span>Images</span>
            </div>
        </div>
    )
}