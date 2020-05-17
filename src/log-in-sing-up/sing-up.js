import React from 'react';

import './log-in.css';


export default class Singup extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          name: '',
          surname: '',
          birthday: '',
          username: '',
          password: '',
          repeatPassword: ''
        }
    
      }
    
    handleSubmit(e) {
        e.preventDefault();
        this.setState({ name: '', surname: '', birthday: '', username: '', password: '' });
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
        } else if (n === 'surname') {
            this.setState({
                surname: e.target.value
            });
        } else if (n === 'birthday') {
            this.setState({
                birthday: e.target.value
            });
        } else if (n === 'username') {
            this.setState({
                username: e.target.value
            });
        } 
    }

    render() {
        return (
            <div className='bodyLog'>
            <form className="box" onSubmit={(e) => this.handleSubmit(e)}>
                <h1>Sing Up</h1>
                <input type="text" placeholder="Name" value={this.state.name} onChange={(e) => this.handleChangeN(e, 'name')}></input>
                <input type="text" placeholder="Surname" value={this.state.surname} onChange={(e) => this.handleChangeN(e, 'surname')}></input>
                <input type="text" placeholder="Birthday" value={this.state.birthday} onChange={(e) => this.handleChangeN(e, 'birthday')}></input>
                <input type="text" placeholder="Username" value={this.state.username} onChange={(e) => this.handleChangeN(e, 'username')}></input>
                <input type="text" placeholder="Password" value={this.state.password} onChange={(e) => this.handleChangeN(e, 'password')}></input>
                <input type="submit" value="Sing Up"></input>
            </form>
            </div>
       );
    }
}