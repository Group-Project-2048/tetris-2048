import React, { Component } from 'react';
import '../../Styles/About.scss';
import { Link } from 'react-router-dom'
import reactimg from '../../Images/react.png'
import jsimg from '../../Images/js-square.png'
import htmlimg from '../../Images/html5.png'
import sassimg from '../../Images/sass.png'
import postgresimg from '../../Images/postgres.png'
import nodeimg from '../../Images/node-js.png'
import michael from '../../Images/Michael.png'
import digs from '../../Images/digs.png'
import jose from '../../Images/Jose.JPG'


class About extends Component {


    render() {
        return (
            <div className='about-page'>
                <div className='animated slideInDown '>
                    <div className='why'>
                        <h2>About the Game</h2>
                        <p> This project required an intense amount of logic when creating functions that helped the game work. <br /> The most difficult thing was to show our functions visually.  Additionally, each function revolved around <br /> the game piece.  Depending on where the game piece was, an additional function would be called.<br /> This game was incredibly challenging to create, but our group definitely learned many things in Javascript <br />and know that
                         we still have a lot to learn.
                    </p>
                        <button className='cool_button'><a href="https://github.com/Group-Project-2048/tetris-2048" target='_blank'>GitHub</a></button>
                    </div>
                    <div className='tools-used'>
                        <h2>Tools Used</h2>
                        <div className='tool'>
                            <img className='tools' src={reactimg} alt="" />
                            <img className='tools' src={jsimg} alt="" />
                            <img className='tools' src={htmlimg} alt="" />
                            <img className='tools' src={sassimg} alt="" />
                            <img className='tools' src={postgresimg} alt="" />
                            <img className='tools' src={nodeimg} alt="" />
                        </div>
                    </div>
                    <div className='partners'>
                        <div className='partner'>
                        <div className='center'>
                            <h4>Michael Han</h4>
                            <img className='personal-pic' src={michael} alt="" />
                            <button className='cool_button'><a href="https://www.linkedin.com/in/michaelhan2/" target='_blank'>LinkedIn</a></button>
                            <button className='cool_button'><a href="https://github.com/hanfamilym1" target='_blank'>GitHub</a></button>
                            </div>
                        </div>
                        <div className='partner'>
                        <div className='center'>
                            <h4>Digory Ellsworth</h4>
                            <img className='personal-pic' src={digs} alt="" />
                            <button className='cool_button'><a href="https://www.linkedin.com/in/digoryellsworth/" target='_blank'>LinkedIn</a></button>
                            <button className='cool_button'><a href="https://github.com/foundling108" target='_blank'>GitHub</a></button>
                            </div>
                        </div>
                        <div className='partner'>
                        <div className='center'>
                            <h4>José A. Ortiz</h4>
                            <img className='personal-pic' src={jose} alt=""/>
                            <button className='cool_button'><a href="https://www.linkedin.com/in/jose-angel-ortiz-webdeveloper/" target='_blank'>LinkedIn</a></button>
                            <button className='cool_button'><a href="https://github.com/Joseangel15" target='_blank'>GitHub</a></button>
                            </div>
                        </div>

                    </div>
                    <Link to='/'><button className='cool_button'>back</button></Link>
                </div>
            </div>
        )
    }
}

export default About;