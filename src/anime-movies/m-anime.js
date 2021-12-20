import React from 'react';

import '../catalog_page/content.css';
import logo0 from '../img/3.jpg'
import logo1 from '../img/4.jpg'
import logo2 from '../img/5.jpg'

import Navigation from '../navigation/navigation';
import Search from '../search-bar/search';
import { NavLink } from 'react-router-dom';


export default class MAnime extends React.Component {

    render() {
        return (
        <div className="content">
            <Navigation></Navigation>
            <Search></Search>
            <table className="simpleCatalog" width="100%">
                <tbody>
                    <tr>
                        <td><NavLink to={'/movies/page4'}><img src={logo1}  width="270" height="390"></img></NavLink></td>
                        <td><NavLink to={'/movies/page3'}><img src={logo0}  width="270" height="390"></img></NavLink></td>
                        <td><NavLink to={'/movies/page5'}><img src={logo2}  width="270" height="390"></img></NavLink></td>
                    </tr>

                </tbody>
            </table>
        </div>);
    }
}