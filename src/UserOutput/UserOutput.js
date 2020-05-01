import React from 'react';
import './UserOutput.css'
const UserOutput = (props) => {
    return <div class="output-main">
        <p> <h2>{props.username}</h2></p>
        <p>Paragraph 2 </p>
    </div>
}

export default UserOutput