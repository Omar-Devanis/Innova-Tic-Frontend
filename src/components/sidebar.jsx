import React from 'react'
import { Link} from "react-router-dom";

const Sidebar = () => {
    return (
        <nav class="sidebar">
            <ul>
                <li> 
                    <Link className='liga' to="/">Home</Link>
                </li>
                <li>
                    <Link className='liga' to="/register">registro</Link>
                </li>
                <li>
                    <Link className='liga' to="/login">registro</Link>
                </li>
            </ul>
                
        </nav>

    )
}

export {Sidebar};
