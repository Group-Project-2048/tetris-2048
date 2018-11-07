import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import '../../Styles/Pause.scss';
// import continueimg from '../../Images/Group-01.png'
import restartimg from '../../Images/Group-02.png'
import leaderboardimg from '../../Images/Group-03.png'
import soundimg from '../../Images/Group-05.png'


class Pause extends Component {

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
                                            <img onClick={this.props.toggleMusic} className='rls' src={soundimg} alt="sound: on / off"/>
                                        </div>
                                    </li>
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