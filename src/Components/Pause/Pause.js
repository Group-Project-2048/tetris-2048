import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import '../../Styles/Pause.scss';
// import continueimg from '../../Images/Group-01.png'
import restartimg from '../../Images/Group-02.png'
import leaderboardimg from '../../Images/Group-03.png'
import soundimg from '../../Images/Group-05.png'
import swal from 'sweetalert2';
import Axios from 'axios';

import music from '../../Music/La_Calahorra.mp3';


class Pause extends Component {
    constructor(){
        super()

        this.state={
            playMusic: true
        }
        this.audio = new Audio(music)
    }

    toggleMusic = () => {
        console.log('Music is:', this.state.playMusic)
        this.setState({
            playMusic: !this.state.playMusic
        })
        this.state.play ? this.audio.play() : this.audio.pause();
    }



    handleDeleteUser = () => {

        swal({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#7DCB3E',
            cancelButtonColor: '#FF0A15',
            confirmButtonText: 'Yes, delete it!',
          }).then((result) => {
            if (result.value) {

                Axios.delete('/api/deleteUser').then(res => {
                    
                }).catch(err => console.log(err))
                console.log('Hello')

                this.props.history.push('/')

              swal(
                'Deleted!',
                'User has been deleted.',
                'success'
                )
                
            }
        })

    }

    render(){
        if(this.props.location.pathname === '/home'){
                return(
                    <nav role="navigation">
                        <div id="menuToggle">
                            <input className="pause" type="checkbox" onClick={this.props.togglePause}/>
                                <span></span>
                                <span></span>
                                <span></span>
                                <ul id="menu">
                                    {/* <li>
                                        <input className="pause" id="continue-button" type="checkbox" onClick={this.props.togglePause}/>
                                        <img src={continueimg} alt="continue"/>
                                    </li> */}
                                    <li>
                                        <div>
                                            <Link to='/leader'><img className='rls' src={leaderboardimg} alt="leader boards"/></Link>
                                            <img onClick={this.props.toggleReset} className='rls' src={restartimg} alt="restart"/>
                                            <img onClick={this.toggleMusic} className='rls' src={soundimg} alt="sound: on / off"/>
                                            {/* <audio controls>
                                                <source src='../../Music/La_Calahorra.mp3' type="audio/mpeg"/>
                                            </audio> */}
                                        </div>
                                    </li>
                                    <button className='deleteUserBtn' onClick={this.handleDeleteUser}>DELETE USER</button>
                                    <Link to='/'><li>EXIT</li></Link>
                                </ul>
                        </div>
                    </nav>
                )
        } else {
            return null
        }
    }
}

export default withRouter(Pause);