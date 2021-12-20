import React from 'react';

import './content.css';


import logo0 from '../img/7.jpg'
import logo1 from '../img/6.jpg'
import logo2 from '../img/8.jpg'
import logo3 from '../img/9.jpg'
import logo4 from '../img/10.jpg'
import logo5 from '../img/11.jpg'

import logo6 from '../img/1.jpg'
import logo7 from '../img/0.jpg'
import logo8 from '../img/2.jpg'

import Navigation from '../navigation/navigation';
import Search from '../search-bar/search';
import { NavLink } from 'react-router-dom';


export default class Content extends React.Component {

    render() {
        return (
        <div className="content">
            <Navigation></Navigation>
            <Search></Search>
                <table className="simpleCatalog" width="100%">
                    <tbody>
                        <tr>
                            <td><NavLink to={'/page6'}><img src={logo1}  width="270" height="390"></img></NavLink></td>
                            <td><NavLink to={'/page7'}><img src={logo0}  width="270" height="390"></img></NavLink></td>
                            <td><NavLink to={'/page8'}><img src={logo2}  width="270" height="390"></img></NavLink></td>
                        </tr>
                        <tr>
                            <td><NavLink to={'/page9'}><img src={logo3}  width="270" height="390"></img></NavLink></td>
                            <td><NavLink to={'/page10'}><img src={logo4}  width="270" height="390"></img></NavLink></td>
                            <td><NavLink to={'/page11'}><img src={logo5}  width="270" height="390"></img></NavLink></td>
                        </tr>
                        <tr>
                            <td><NavLink to={'/page0'}><img src={logo7}  width="270" height="390"></img></NavLink></td>
                            <td><NavLink to={'/page1'}><img src={logo6}  width="270" height="390"></img></NavLink></td>
                            <td><NavLink to={'/page2'}><img src={logo8}  width="270" height="390"></img></NavLink></td>
                        </tr>
                    </tbody>
                </table>
        </div>);
    }
}