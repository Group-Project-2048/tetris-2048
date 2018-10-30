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
            toggleBlur: 'blurred-window'
        }
    }

    handlePause = () => {
        this.setState({
            pause: !this.state.pause
        })
    }

    render(){
        if(this.props.location.pathname === '/home'){
                return(
                    <nav role="navigation">
                        <div id="menuToggle">
                            <input type="checkbox" />
                                <span></span>
                                <span></span>
                                <span></span>
                                <ul id="menu">
                                    <li>Restart</li>
                                    <Link to='/leader'><li>Leader Boards</li></Link>
                                    <Link to='/'><li>Start Screen</li></Link>
                                    <li>Sound: On / Off</li>
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


/* <div className='glass-container'>
<nav className='menu'>
    <input onClick={this.handlePause} className='menu-toggler' id='menu-toggler' type='checkbox'/>
    <label htmlFor='menu-toggler'></label>
        <ul>
            <li className='menu-item'>
                <button>R</button>
            </li>
            <li className='menu-item'>
                <button><Link to='/leader'>LB</Link></button>
            </li>
            <li className='menu-item'>
                <button>S</button>
            </li>
        </ul>
</nav>
</div> */