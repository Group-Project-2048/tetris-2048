import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import './StartScreen.css';
import axios from 'axios';
import logo from'./Stacky.png';
import swal from 'sweetalert2';


class StartScreen extends Component {
    constructor(props){
        super(props)

        this.state = {
            
            username: '',
        }


        this.handleRegister = this.handleRegister.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(prop, val){
        this.setState({
            [prop]: val
        })
        console.log(this.state.username)
    }

    handleRegister(){

        //This method is not working because the table is duplicating the primary key. 

        const toast = swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000
          });

        const {username} = this.state;

        if(!username){
            return toast({
                type: 'warning',
                title: 'Please add a username'
            })
        };

        let body = {
            username: username,
            score: 0,
            time_stamp: null
        }

        axios.post('/api/register', body).then(res =>{

            this.props.history.push('/home')

            console.log(res)
        }).catch(err => console.log(err))

    }

    render(){
        return(
            <div>
                <div className='startBack'>
                    <div className='startMenuBox'>
                        <div className='stackyTitle'>
                            <img src={logo} alt="" className='stackyTitle'/>
                        </div>
                        <div style={{width: '200px', margin: 'auto'}}>
                            <input 
                                type="text" 
                                placeholder='Username' 
                                className='usernameInput'
                                onChange={(e) => this.handleChange('username', e.target.value)}/>
                            <hr/>
                        </div>
                        <div className='BtnBox'>
                           <button className='loginBtn' onClick={() => this.handleRegister()}>
                                <i className="fas fa-play"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default StartScreen;