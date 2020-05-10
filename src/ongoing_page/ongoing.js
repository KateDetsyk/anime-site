import React from 'react';

import './ongoing.css';

import logo3 from '../img/1.jpg'
import logo4 from '../img/0.jpg'
import logo5 from '../img/2.jpg'

import Navigation from '../navigation/navigation';
import DayContet from './day_ongoing';


export default class Ongoing extends React.Component {


    render() {
        return (
        <div className='body'>
        
        <div className='content'>
            <Navigation></Navigation>
            <div className='news-block'>
                {/* <DayContet></DayContet> */}
                <div className='day'>Monday</div>
            
                <div className='day'>Tuesday</div>

                <div className='day'>Wednesday</div>
                <DayContet logo={logo3} id="page1"></DayContet>

                <div className='day'>Thursday</div>
                <DayContet logo={logo4} id="page0"></DayContet>

                <div className='day'>Friday</div>
                <DayContet logo={logo5} id="page2"></DayContet>

                <div className='day'>Saturday</div>
                <div className='day'>Sunday</div>

            </div>
        </div>
        </div>);
    }
}