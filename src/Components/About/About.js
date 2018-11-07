import React, { Component } from 'react';
import '../../Styles/About.scss';
import {Link} from 'react-router-dom'


class About extends Component{


    render(){
        return(
            <div>
                About
                <Link to='/'><button>back</button></Link>
            </div>
        )
    }
}

export default About;