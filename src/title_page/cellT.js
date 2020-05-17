import React from 'react';

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
import './title.css';


export default class CellT extends React.Component {


    render() {
        const { list } = this.props;

        
        return (
                <div className='block'>
                    <div className="emptyHeader"></div>

                    <div className="xreleaseInfo">
                        <h1 className="release-title" overflow= 'hidden' white-space = 'nowrap' text-overflow = 'ellipsis' margin-bottom = '0px'>
                        { list.name}
                        </h1>
                        <hr className="line"></hr>
                        <b>Premiered:</b> { list.Premiered}<br></br>
                        <b>Type:</b> { list.Type}<br></br>
                        <b>Genres:</b> {list.Genres}<br></br>


                        <hr className="line" ></hr>
                        <p className="detail-description" >{list.Description}</p></div>

                    <div className="detail_side">
                        <img className="detail_pic" border="2" src={list.logo} width="350" height="500"></img>
                    </div>
            </div>
        );
    }
}