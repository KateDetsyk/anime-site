import React from 'react';

import './navigation.css';


export default class Navigation extends React.Component {

    render() {
        return (
            <div className="contentmenu">
                <ul className="main-navigation">
                    <li><a id="activelink0" href="">All Anime</a></li>
                    <li><a id="activelink1" href="">Ongoings</a></li>
                    <li><a id="activelink2" href="">Anime Movies</a></li>
                    <li><a id="activelink3" href="">Random Anime</a></li>
                </ul>
            </div>
       );
    }
}