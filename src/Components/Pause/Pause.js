import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import './Pause.scss';

// card colors from the solitaire game
// 2 = #C0B4A5 4 = #F2CB35 8 = #FF891F 16 = #FF0A15 32 = #7DCB3E 64 = #C47BFB 128 = #FF019D 256 = #12B559 512 = #8500F5 1024 = #018EE6 2048 = #000000
// pause menu ==> play button = #94E016 restart button = #22ACE9 ldrbrd button = #FFC300

class Pause extends Component {
    constructor(props){
        super(props)

        this.state = {
            pause: true,
        }
    }

    // handlePause = () => {
    //     if(pause === true)
    // }


    render(){
        if(this.props.location.pathname === '/'){
                return(
                    <div className='container'>
                        <div className='btn play'>
                        {/* <div className='btn play' onClick={this.handlePause()}> */}
                            <span className='bar bar-1'></span>
                            <span className='bar bar-2'></span>
                        </div>
                    <Link to='/leader'>GO TO LEADER BOARDS</Link>
                </div>
            )
        } else if(this.props.location.pathname === '/leader'){
            return(
                <div className='container'>
                        <div className='btn play'>
                        {/* <div className='btn play' onClick={this.handlePause()}> */}
                            <span className='bar bar-1'></span>
                            <span className='bar bar-2'></span>
                        </div>
                    <Link to='/'>GO TO GAME</Link>
                </div>
            )
        } else {
            return null
        }
    }
}

export default withRouter(Pause);