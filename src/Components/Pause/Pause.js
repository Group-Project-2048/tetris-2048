import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class Pause extends Component {



    render(){
        if(this.props.location.pathname === '/'){
                return(
                    <div>
                    Pause
                    <Link to='/leader'>GO TO LEADER BOARDS</Link>
                </div>
            )
        } else if(this.props.location.pathname === '/leader'){
            return(
                <div>
                Pause
                    <Link to='/'>GO TO GAME</Link>
                </div>
            )
        } else {
            return null
        }
    }
}

export default withRouter(Pause);