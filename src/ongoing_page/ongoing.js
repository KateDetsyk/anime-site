import React from 'react';

import './ongoing.css';
import logo0 from './logo.png'
import logo1 from '../img/logo1.jpg'
import logo2 from '../img/logo2.jpg'
import Navigation from '../navigation/navigation';



export default class Ongoing extends React.Component {

    render() {
        return (
        <div className='body'>
        
        <div className='content'>
            <Navigation></Navigation>
            <div className='news-block'>
                <div className='day'>Monday</div>
                <table className='test'>
                    <tbody>
                        <tr>
                            <td className='goodcell'>
                            <a href=""><img src={logo2} alt="Balance Unlimited" width="200" height="280"></img></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </div>);
    }
}