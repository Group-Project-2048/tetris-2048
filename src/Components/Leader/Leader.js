import React, { Component } from 'react';
import './Leader.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Leader extends Component {
    constructor(props) {
        super(props)

        this.state = {
            players: [], //Players will be an array of objects with all players info from the database.
            scoresOfDay: [],
            scoresOfMonth: [],
            score: 'Overall',

        }


        this.handleDisplayPlayers = this.handleDisplayPlayers.bind(this);
        this.handleDayBtn = this.handleDayBtn.bind(this);
        this.handleWeekBtn = this.handleWeekBtn.bind(this);
        this.handleOverallBtn = this.handleOverallBtn.bind(this);
    }

    componentDidMount() {
        console.log('attempting to get')
        axios.get('/api/getPlayers').then(res => {
            console.log(res.data)
            this.setState({
                players: res.data
            })
        })
    }

    handleDisplayPlayers() {
        // return this.players.map(){

        // }
    }

    handleDayBtn(array) {
        //This btn will display the highest scores of the day
        let dayScores = [];

        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth(); //January is 0!
        let yyyy = today.getFullYear();

        for (let i = 0; i < array.length; i++) {

            let timeStamp = array[i].time_stamp;

            if (timeStamp !== null) {
                let arrayDate = timeStamp.substring(0, 10)
                if (arrayDate === yyyy + '-' + (mm + 1) + '-' + dd) {
                    dayScores.push(array[i])
                } else {
                    return
                }
            }
            this.setState({
                scoresOfDay: dayScores,
                score: 'day'
            })
        }
        console.log(dayScores)
        return dayScores
    }

    handleWeekBtn(array) {
        
    }

    handleMonthBtn(array) {
        //This button will display the highest scores of the month
        let monthScores = [];

        let today = new Date();
        let mm = today.getMonth(); //January is 0!

        for( let i = 0; i < array.length; i++){

            let timeStamp = array[i].time_stamp;

            if(timeStamp !== null){
                let arrayDate = timeStamp.substring(5, 7)
                if(parseInt(arrayDate) === (mm + 1)){
                    monthScores.push(array[i])
                }else{
                    return
                }
            }
            this.setState({
                scoresOfMonth: monthScores,
                score: 'month'
            })
        }
        return monthScores;
    }

    handleOverallBtn() {
        axios.get('/api/getPlayers').then(res => {
            console.log(res.data)
            this.setState({
                players: res.data,
                score: 'Overall'
            })
        })
    }

    render() {

        //Maps for Overall score

        const newPlayers = this.state.players.map((el, i) => {
            return (
                <div key={el+i}>
                    <h5>{el.name}</h5>
                </div>
            )
        })

        const scores = this.state.players.map((el, i) => {
            return (
                <div key={el+i}>
                    <h5>{el.score}</h5>
                </div>
            )
        })

        //Maps for score of the day

        const showDay = this.state.scoresOfDay.map((el, i) => {
            return (
                <div key={el+i}>
                    <h5>{el.name}</h5>
                </div>
            )
        })

        const showDayScores = this.state.scoresOfDay.map((el, i) => {
            return (
                <div key={el+i}>
                    <h5>{el.score}</h5>
                </div>
            )
        })

        //Maps for score of the month

        const showMonth = this.state.scoresOfMonth.map((el, i) => {
            return (
                <div key={el+i}>
                    <h5>{el.name}</h5>
                </div>
            )
        })

        const showMonthScores = this.state.scoresOfMonth.map((el, i) => {
            return (
                <div key={el.i}>
                    <h5>{el.score}</h5>
                </div>
            )
        })

        return (
            <div className='backgroundBox'>
                <button><Link to='/'>back</Link></button>
                <h1 style={{ color: 'white' }}>Top Players</h1>

                <div className='scoreBtns'>
                    <button onClick={() => this.handleDayBtn(this.state.players)} className='scoreBtns'>Day</button>
                    <button onClick={this.handleWeekBtn} className='scoreBtns'>Week</button>
                    <button onClick={() => this.handleMonthBtn(this.state.players)} className='scoreBtns'>Month</button>
                    <button onClick={() => this.handleOverallBtn()} className='scoreBtns'>Overall</button>
                </div>

                <div className='mainBox'>
                    <div className='pageTitles'>
                        <h3>Players
                            <hr />
                        </h3>
                        <h3 style={{ marginRight: '20px' }}>Score
                            <hr />
                        </h3>
                    </div>
                    <div className='scorePlayers'>
                        <div className='playerBox'>

                            <div className='userNames'>
                                {this.state.score === 'Overall'? newPlayers: this.state.score === 'day'? showDay: this.state.score === 'month'? showMonth: 'Overall'}
                            </div>
                        </div>
                        <div className="scoreBox">
                            {this.state.score === 'Overall'? scores: this.state.score === 'day'? showDayScores: this.state.score === 'month'? showMonthScores: 'Overall'}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Leader;