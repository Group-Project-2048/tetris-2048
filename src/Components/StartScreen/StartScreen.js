import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './StartScreen.css';


class StartScreen extends Component {

    render(){
        return(
            <div>
                <div className='startBack'>
                    <div className='startMenuBox'>
                        <div className='stackyTitle'>
                            <h1 style={{fontSize: '70px'}}>STACKY</h1>
                        </div>
                        <div style={{width: '200px', margin: 'auto'}}>
                            <input type="text" placeholder='Username' className='usernameInput'/>
                            <hr/>
                        </div>
                        <div className='BtnBox'>
                            <Link to='/home'><div style={{fontSize: '80px'}}>
                                <i class="fas fa-play white"></i>
                            </div></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default StartScreen;