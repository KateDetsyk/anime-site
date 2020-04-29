import React from 'react';

import './navigation.css';


export default class Navigation extends React.Component {

    render() {
        return (
            <div className="contentmenu">
            <ul className="main-navigation">
            <li><a id="activelink0" href="">Anime list</a></li>
            <li><a id="activelink1" href="">Ongoings</a></li>
            <li><a id="activelink2" href="">Anime movies</a></li>
            <li><a id="activelink3" href="">Random anime</a></li>

            </ul>
            </div>
       );
    }
}