import React from 'react';

import './navigation.css';

import { NavLink } from 'react-router-dom';

const all_pages = ["page0", "page1", "page2", "page3", "page4", "page5", "page6", "page7", "page8", "page9", "page10", "page11"];
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

export default class Navigation extends React.Component {
    render() {
        return (
            <div className="contentmenu">
                <ul className="main-navigation">
                    <li><NavLink exact to="/" id="activelink0" >All Anime</NavLink></li>
                    <li><NavLink to="/ongoings" id="activelink1" >Ongoings</NavLink></li>
                    <li><NavLink to='/movies' id="activelink2">Anime Movies</NavLink></li>
                    <li><NavLink to={'/'+all_pages[getRandomInt(all_pages.length)]} id="activelink3" >Random Anime</NavLink></li>
                </ul>
            </div>
       );
    }
}