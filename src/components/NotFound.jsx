import React from 'react';
import {Link} from 'react-router-dom'

function NotFound(props) {
    return (
        <div>
            <h1>404 Not Found</h1>
            <Link to='/'>Back to Home</Link>
        </div>
    );
}

export default NotFound;