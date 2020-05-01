import React from 'react';

import './side.css';


// import TodoItem from './todo-item';

export default class Side extends React.Component {

    render() {
        return (
            <div className='side'>
                <div className='asidehead'>
                    <div width='260px' padding-top='11px' margin='0 auto'>
                        <div className='inner-addon right-addon'>
                            <i className='glyphicon glyphicon-search'>::before</i>
                            <input id='smallSearchInput' class='form-control' type="search" width='100%' 
                            height='30px' placeholder="Search anime by name" autoComplete="off"></input>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}