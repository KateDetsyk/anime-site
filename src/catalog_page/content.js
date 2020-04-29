import React from 'react';

import './content.css';
import logo0 from '../img/logo.png'
import logo1 from '../img/logo1.jpg'
import logo2 from '../img/logo2.jpg'
import Navigation from '../navigation/navigation';



// import TodoItem from './todo-item';

export default class Content extends React.Component {

    render() {
        return (
        <body>
           
        <div className="content">
        <Navigation></Navigation>
            <table className="simpleCatalog">
            <tbody>
                <tr>
                    <td><a href=""><img src={logo1} alt="Balance Unlimited" width="270" height="390"></img></a></td>
                    <td><a href=""><img src={logo0}  width="270" height="390"></img></a></td>
                    <td><a href=""><img src={logo2}  width="270" height="390"></img></a></td>
                </tr>
            </tbody></table>
            </div>
        </body>);
    }
}