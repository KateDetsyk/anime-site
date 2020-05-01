import React from 'react';

import './content.css';
import logo0 from '../img/logo.png'
import logo1 from '../img/logo1.jpg'
import logo2 from '../img/logo2.jpg'
import logo3 from '../img/logo3.jpg'
import logo4 from '../img/logo4.jpg'
import logo5 from '../img/logo5.jpg'
import Navigation from '../navigation/navigation';
import Search from '../search-bar/search';



// import TodoItem from './todo-item';

export default class Content extends React.Component {

    render() {
        return (
        <div className="body">
           
        <div className="content">
        <Navigation></Navigation>
        <Search></Search>
            <table className="simpleCatalog" width="100%">
            <tbody>
                <tr>
                    <td><a href=""><img src={logo1} alt="Balance Unlimited" width="270" height="390"></img></a></td>
                    <td><a href=""><img src={logo0}  width="270" height="390"></img></a></td>
                    <td><a href=""><img src={logo2}  width="270" height="390"></img></a></td>
                </tr>
                <tr>
                    <td><a href=""><img src={logo3} alt="Balance Unlimited" width="270" height="390"></img></a></td>
                    <td><a href=""><img src={logo4}  width="270" height="390"></img></a></td>
                    <td><a href=""><img src={logo5}  width="270" height="390"></img></a></td>
                </tr>
            </tbody></table>
            </div>
        </div>);
    }
}