import React from 'react';

import './ongoing.css';
import { NavLink } from 'react-router-dom';


const DayContet = ({ logo, id}) => (
    <table className='test'>
    <tbody>
        <tr>
            <td className='goodcell'>
            <NavLink to={'/ongoings/'+id}><img src={logo}  width="200" height="280"></img></NavLink>
            </td>
        </tr>
    </tbody>
    </table>
);
export default DayContet;