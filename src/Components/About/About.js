import React, { Component } from 'react';
import '../../Styles/About.scss';
import {Link} from 'react-router-dom'


class About extends Component{


    render(){
        return(
            <div className='aboutBack'>

                <div>
                    <Link to='/'><button id='aboutBtn'>BACK</button></Link>

                    <header>
                        <section>
                            <div id='infoBoxes'>
                                <img src="" alt=""/>
                                <h1>Digory Ellsworth</h1>
                                <h5>Co-Developer</h5>
                                <p>Short Bio</p>
                                <a href=""></a>
                                <a href=""></a>
                            </div>
                            <div id='infoBoxes'>
                            <img src="" alt=""/>
                                <h1>Michael C. Han</h1>
                                <h5>Co-Developer</h5>
                                <p>Short Bio</p>
                                <a href=""></a>
                                <a href=""></a>
                            </div>
                            <div id='infoBoxes'>
                            <img src="" alt=""/>
                                <h1>Jose A. Ortiz</h1>
                                <h5>Co-Developer</h5>
                                <p>Short Bio</p>
                                <a href=""></a>
                                <a href=""></a>
                            </div>
                        </section>
                    </header>
                </div>

            </div>
        )
    }
}

export default About;