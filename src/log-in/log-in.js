import React from 'react';

import './log-in.css';


export default class Login extends React.Component {

    render() {
        return (
            <div className='bodyLog'>
            <form className="box" method="post">
            <h1>Login</h1>
            <input type="text" name="" placeholder="Username"></input>
            <input type="password" name="" placeholder="Password"></input>
            <input type="submit" name="" value="Login"></input>
            </form>
            </div>
       );
    }
}