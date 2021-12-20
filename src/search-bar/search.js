import React from 'react';

import './search.css';
import logo from "../img/footer_img.png";

export default class Search extends React.Component {

    render() {
        return (
        <div className="wrapper">
                <input type="text" className="input" placeholder="What are you looking for?"></input>
                <div className="searchbtn"><i className="fas fa-search"></i></div>
        </div>)
    }
}