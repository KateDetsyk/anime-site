import React from 'react';

import './footer.css';
import logo from "../img/footer_img.png";

export default class Footer extends React.Component {

    render() {
        return (
        <div className="footer">
            <div className='footer-left'></div>
            <div className='footer-right'>
                <ul>
                    <li><a href='https://github.com/KateDetsyk/anime-site.git'>GitHub</a></li>
                    <li><a href=''> | About</a></li>
                    <li><a href=''> | Question</a></li>
                    <li><a href=''> | Log in</a></li>
                    <li><a href=''> | Sing up</a></li>

                </ul>
                <p>
                Just an anime site. 
                Currently in the development phase.<br></br>
                Links and buttons aren't working yet. 
                </p>
            </div>
        </div>
        );
    }
}