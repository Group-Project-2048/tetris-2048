import React, { Component } from 'react';
import '../../Styles/StartScreen.scss';
import {Link} from 'react-router-dom';
import axios from 'axios';
import logo from'../../Images/Stacky.png';
import swal from 'sweetalert2';


class StartScreen extends Component {
    constructor(props){
        super(props)

        this.state = {
            
            username: '',
            user: {},
        }


        this.handleRegister = this.handleRegister.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    componentDidMount(){
        axios.get('/api/getSession').then(res => {
            this.setState({
                user: res.data
            })
            console.log(this.state.user)
            console.log(this.state.username)
        })

        
    }

    handleChange(prop, val){
        this.setState({
            [prop]: val
        })
    }

    handleRegister(){

        const toast = swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000
          });

        const {username} = this.state;

        if(this.state.user[0]){
            return this.props.history.push('/home')
        } else if (!username && !this.state.user[0]){
            return toast({
                type: 'warning',
                title: 'Please add a username'
            })
        }else {

        let body = {
            username: username,
            score: 0
        }

        axios.post('/api/register', body).then(res =>{


            this.props.history.push('/home')

            console.log(res)

        }).catch(err => console.log(err))

        }

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
                                value={this.state.user[0]? this.state.user[0].name: undefined}
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
                <Link to='/about'><button className='cool_button'>About</button></Link>
                </div>
            </div>
        )
    }
}

export default StartScreen;