import React from 'react';

import './title.css';
import Navigation from '../navigation/navigation';

import logo1 from '../img/0.jpg'
import logo2 from '../img/1.jpg'
import logo3 from '../img/2.jpg'
import logo4 from '../img/3.jpg'
import logo5 from '../img/4.jpg'
import logo6 from '../img/5.jpg'
import logo7 from '../img/6.jpg'
import logo8 from '../img/7.jpg'
import logo9 from '../img/8.jpg'
import logo10 from '../img/9.jpg'
import logo11 from '../img/10.jpg'
import logo12 from '../img/11.jpg'
import CellT from './cellT';


export default class Title extends React.Component {
   

    constructor(props) {
        super(props);
        this.state = {TitleInformation: [],}
    }

    
    componentDidMount() {
    fetch('/TitleInformation').then(resp => {
        return resp.json();
    }).then(body => {
        console.log(body);
        this.setState({
            TitleInformation: body
        })
    })
    }
    
    getListById(Id) {
        
        return this.state.TitleInformation.find((list) => list.id == Id) || {};
    }

    render() {
        return (
            <div className='content'>
                <Navigation></Navigation>
                <CellT list={this.getListById(this.props.id) }></CellT>
            </div>
        );
    }
}