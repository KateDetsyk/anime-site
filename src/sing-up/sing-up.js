import React from 'react';

import './sing-up.css';


export default class Singup extends React.Component {

    render() {
        return (
            <div className='bodySing'>
            <form className="boxS" method="post">
            <h1>Sing Up</h1>
            <input name="" placeholder="Name"></input>
            <input name="" placeholder="Surname"></input>
            <input name="" placeholder="Birthday"></input>
            <input name="" placeholder="Username"></input>
            <input name="" placeholder="Password"></input>
            <input name="" placeholder="Repeat Password"></input>
            <input type="submit" name="" value="Sing Up"></input>
            </form>
            </div>
       );
    }
}