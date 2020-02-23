import React from "react";

function Emoji (props) {
    return <div>
        <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
                {props.emoji}
            </span>
            <span> {props.name} </span>
        </dt>
    </div>
}

export default Emoji;