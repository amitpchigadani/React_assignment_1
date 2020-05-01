import React from 'react';
import './UserInput.css'
const UserInput = (props) => {
    return <div className="input-main">
        <input type="textbox"
            onChange={props.changed}
            value={props.username} />
    </div>
}

export default UserInput