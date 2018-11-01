import React, { Component } from 'react';
import Blocks from './Blocks/Blocks';
import '../../Styles/Home.scss'
import leaderboardimg from '../../Images/Group-03.png'
import Axios from 'axios';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            board: [
                // [0, 16, 0, 0],
                // [0, 0, 0, 0],
                // [0, 0, 0, 0],
                // [0, 0, 0, 0],
                // [0, 0, 0, 0],
                // [0, 0, 0, 0],
                // [0, 0, 0, 0],
                // [0, 0, 0, 0],
                // [0, 0, 0, 0]
                [0, 16, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 16, 0, 0],
                [0, 32, 0, 0],
                [0, 64, 0, 0],
                [0, 128, 0, 0],
                [0, 256, 0, 0],
                [0, 512, 0, 0]
            ],

            // [0, 0, 0, 0],
            // [0, 0, 0, 0],
            // [0, 0, 0, 0],
            // [0, 16, 0, 0],
            // [0, 32, 0, 0],
            // [0, 64, 0, 0],
            // [0, 128, 0, 0],
            // [0, 256, 0, 0],
            // [0, 512, 0, 0]
            //block class that consists of the pieces like below
            // VALUE WILL BE A FN THAT TAKES A VALUE FROM OU LIST OF VALUES. (2 4 8 16 32 64 WILD)
            // piece: { row: 0, col: 1, value: rando()}
            piece: { row: 0, col: 1, value: 16 },
            y: 0,
            x: 0,
            z: 0,
            level: 1,
            pointsToLevel: 300,
            score: 0,
            shadowScore: 0,
            scorePercentageMet: '',
            nextitem: '',
            swapitem: 32,
            random: '',
            numbers: [2, 4, 8, 16, 32, 64, 'W'],
            highestScore: [],
            // count: 0
            // initialStart: this.state.board[0][1],
            nextItem: 64,
            swapItem: 32,
            multiplier: 1,
        }
    }

    componentDidMount() {
        this.game()
        this.handleRandomNumber(this.state.numbers)
        this.handleScoreBar(this.state.shadowScore)
        this.handleIncreaseLevel(this.state.pointsToLevel)
        console.log(this.state.nextitem)


        
    }

    
//This method is to test the handleScoreBar and handleIncreaseLevel methods
    increaseScore = () => {
        
            this.setState({
                score: this.state.score + 100,
                shadowScore: this.state.shadowScore + 100
            })
     }

    game = () => {
        let { board, piece } = this.state
        let newboard = board.map(element => [...element])
        setInterval(this.fall, 1000)

        //This interval is to test the handleScoreBar and handleIncreaseLevel methods
        setInterval(this.increaseScore, 2000)

        this.handleGetHighScore()
    }

    handleRandomNumber = (arr) => {
        let randomNumber = arr[Math.floor(Math.random() * arr.length)];
        this.setState({
            random: randomNumber
        })
    }

    handleScoreBar = (num) => {
        let percentageMet = ((1.00 - (((this.state.pointsToLevel - num) / this.state.pointsToLevel).toFixed(2))).toFixed(2) * 100) + '%';
        
        console.log(percentageMet)
        this.setState({
            scorePercentageMet: percentageMet
        })
        console.log(this.state.scorePercentageMet)
    }

    handleIncreaseLevel = (num) => {
        if(this.state.shadowScore > num){
            this.setState({
                pointsToLevel: num * 2,
                shadowScore: 0,
                level: this.state.level + 1,
                // scorePercentageMet: '0%'
            })
            
        }
    }

    handleGetHighScore = () => {
        Axios.get('/api/getHighScore').then(res => {
            console.log(res.data)
            let newRes = res.data[0].score
            console.log(newRes)
            this.setState({
                highestScore: newRes
            })
        })
    }

    fall = () => {
        let { piece, board, x, y } = this.state
        let newpiece = { ...piece }
        let { value, row, col } = newpiece
        let newboard = board.map(element => [...element])

        newboard.forEach(row => {
            row.forEach(column => {
                let newpiece = { ...piece }
                var { value, row, col } = newpiece
                let newboard = board.map(element => [...element])
                if (y >= 0 && y <= 8) {
                    if (y >= 0 && y <= 7) {
                        //before it moves down we want it to check first
                        // basic movement 
                        console.log('the real value', value)
                        if (newboard[row + y + 1][col + x] === 0) {
                            newboard[row + y][col + x] = 0
                            newboard[row + y + 1][col+x] = value
                            console.log('hello')
                            console.log(value)
                            var movedown = y + 1
                            
                        } 
                        // combine movement
                        else if (newboard[row+y][col+x] === newboard[row+y+1][col+x]){
                            // newboard + newboard(1) = new value
                            // newvalue = newboard(1)
                            // newboard = 0
                            newboard[row+y][col+x] = 0
                            newboard[row+y+1][col+x] = value*2
                            console.log(newboard[row+y][col+x]) 
                            console.log(newboard[row+y+1][col+x]) 
                            newpiece.value = value*2
                            console.log('goodbye')
                            var movedown = y + 1
                        } 
                        
                        
                        this.setState({
                            board: newboard,
                            y: movedown,
                            piece: newpiece
                        })
                       
                    } else {
                        let movedown = y
                        this.setState({
                            board: newboard,
                            y: movedown
                        })
                    }
                   
                }

            })
        })
    }



    render() {
        let newboard = this.state.board.map((el, i) => {
            let item = el.map(number => {
                return (
                    <div>
                        <p className={`num-${number}`}>
                            {number}
                        </p>
                    </div>

                )
            })
            return (
                item
            )
        })

        return (
            <div className='container'>
                <div className='top-bar'>
                    <div className='leaderboard-score'>
                        <div className='leaderboard'>
                            <img id='leader' src={leaderboardimg} alt="" />
                            <h3>{this.state.highestScore}</h3>
                        </div>
                        <div className='score'>
                            <h2>{this.state.score}</h2>
                        </div>
                    </div>
                    <div className='truelevel'>
                        <h3 className='margin-right'>Level {`${this.state.level}`} </h3>
                        <div className='level'>
                            <div className='level2' style={{width: this.state.scorePercentageMet}}></div>
                        </div>
                    </div>
                </div>
                <div className='middle'>
                    <div className='next-item'>
                        <h4>Next Item</h4>
                        <Blocks numbers={this.state.random} />
                    </div>
                    <div className='actual-grid'>
                        {newboard}
                    </div>
                    <div className='swap-item'>
                        <h4>Swap Item</h4>
                        <div>
                            <p>{this.state.swapitem}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;