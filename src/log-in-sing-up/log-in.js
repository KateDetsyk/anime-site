import React from 'react';

import './log-in.css';


export default class Login extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          name: '',
          password: ''
        }
    
      }
    
    handleSubmit(e) {
        e.preventDefault();
        this.setState({ name: '', password: '' });
    }
    
    handleChangeN(e, n) {
        if (n === 'name') {
            this.setState({
                name: e.target.value
            });
        } else if (n === 'password') {
            this.setState({
                password: e.target.value
            });
        }
    }

    render() {
        return (
            <div className='bodyLog'>
            <form className="box" onSubmit={(e) => this.handleSubmit(e)}>
                <h1>Login</h1>
                <input type="text" placeholder="Username" value={this.state.name} onChange={(e) => this.handleChangeN(e, 'name')}></input>
                <input type="text" placeholder="Password" value={this.state.password} onChange={(e) => this.handleChangeN(e, 'password')}></input>
                <input type="submit" value="Login"></input>
            </form>
            </div>
       );
    }
}