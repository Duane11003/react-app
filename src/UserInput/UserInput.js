import React from 'react';

// creating userInput component

const userInput = (props) => {
    return  (
        <div>
            <input type="text" pattern="[0-9]*" inputMode="numeric"></input>
        </div>
    )
}

export default userInput;