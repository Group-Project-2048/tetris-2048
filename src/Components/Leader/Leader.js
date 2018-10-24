import React, { Component } from 'react';
import './Leader.css';
import axios from 'axios';

class Leader extends Component {
    constructor(props) {
        super(props)

        this.state = {
            players: [], //Players will be an array of objects with all players info from the database.
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

    handleDayBtn() {
        //This btn will display 
    }

    handleWeekBtn() {

    }

    handleMonthBtn() {

    }

    handleOverallBtn() {

    }

    render() {

        const newPlayers = this.state.players.map(el => {
            return (
                <div>
                    <h5>{el.name}</h5>
                </div>
            )
        })

        const scores = this.state.players.map(el => {
            return (
                <div>
                    <h5>{el.score}</h5>
                </div>
            )
        })

        return (
            <div className='backgroundBox'>

                <h1 style={{ color: 'white' }}>Top Players</h1>

                <div className='scoreBtns'>
                    <button onClick={this.handleDayBtn} className='scoreBtns'>Day</button>
                    <button onClick={this.handleWeekBtn} className='scoreBtns'>Week</button>
                    <button onClick={this.handleMonthBtn} className='scoreBtns'>Month</button>
                    <button onClick={this.handleOverallBtn} className='scoreBtns'>Overall</button>
                </div>

                <div className='mainBox'>
                    <div className='pageTitles'>
                        <h3>Players
                            <hr/>
                        </h3>
                        <h3>Score
                            <hr/>
                        </h3>
                    </div>
                    <div className='scorePlayers'>
                        <div className='playerBox'>
                          
                            <div className='userNames'>
                                {newPlayers}
                            </div>
                        </div>
                        <div className="scoreBox">
                           
                            {scores}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Leader;