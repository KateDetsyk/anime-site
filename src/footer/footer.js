import React from 'react';

import './footer.css';
import { NavLink } from 'react-router-dom';

export default class Footer extends React.Component {

    render() {
        return (
        <div className="footer">
            <div className='footer-left'></div>
            <div className='footer-right'>
                <ul>
                    <li><NavLink to="/"> Main Page</NavLink></li>
                    <li><a href='https://github.com/KateDetsyk/anime-site.git'> | GitHub</a></li>
                    <li><NavLink to='/login'> | Log in</NavLink></li>
                    <li><NavLink to='/singup'> | Sing up</NavLink></li>

                </ul>
                <p>
                    Just an anime site. 
                    Currently in the development phase.<br></br> 
                </p>
            </div>
        </div>
        );
    }
}