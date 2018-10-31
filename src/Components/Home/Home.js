import React, { Component } from 'react';
<<<<<<< HEAD
import Blocks from './Blocks/Blocks';
// import './Home.css'
=======
>>>>>>> master
import './Home.scss'
import leaderboardimg from './Group-03.png'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            board: [
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 32, 0, 0],
                [0, 64, 0, 0]
            ],
            //block class that consists of the pieces like below
            // VALUE WILL BE A FN THAT TAKES A VALUE FROM OU LIST OF VALUES. (2 4 8 16 32 64 WILD)
            // piece: { row: 0, col: 1, value: rando()}
            piece: { row: 0, col: 1, value: 32 },
            y: 0,
            x: 0,
            level: 1,
            score: 0,
            nextitem: '',
            swapitem: 32,
            random: '',
            numbers: [2, 4, 8, 16, 32, 64, 'W'],


            // count: 0
            // initialStart: this.state.board[0][1],
            nextitem: 64,
            swapitem: 32,
            multiplier: 1,
        }
    }
    
    componentDidMount() {
        this.game()
        // ^ this is where we need to start our loop
        // loop should contain this.fall()
        this.handleRandomNumber(this.state.numbers)
        console.log(this.state.nextitem)
    }

    handleRandomNumber = (num) => {
        let randomNumber = num[Math.floor(Math.random()*num.length)];
         this.setState({
            random: randomNumber
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
                if (y >= 0 && y <= 7){
                    if(newboard[row + y+1][col + x] === 0){
                        let movedown = y+1
                        newboard[row+y][col + x] = 0
                        newboard[row+y+1][col+x] = value
                        this.setState({
                            board: newboard,
                            y: movedown
                        })
                    } else {
                        this.checkCollision()
                    }
                }
                 else if(y === 8){
                    if(newboard[row + y][col + x] === 0){
                        newboard[row+y][col + x] = value
                    } else {
                        this.checkCollision()
                    }
                }
            })
        })            
    }

    combine = (a, b) =>{
        let { piece, board, x, y } = this.state
        let newpiece = { ...piece }
        let { value, row, col } = newpiece
        let newboard = board.map(element => [...element])
        a = x
        b = y
        let num1 = newboard[row+b][col+a]
        let num2 = newboard[row+b+1][col+a]
        if( num1 === num2){
            let num3 = num1 + num2
            newboard[row+b+1][col+a] = num3
            newboard[row+b][col+a] = 0
            this.setState({
                board: newboard
            })
            this.combine(a,b+1)
            console.log('THIS IS A THING', value, newboard[row+y][col+x])
        }
        // if(value === newboard[row+y][col+x]){

        // }
    }


    checkCollision = () => {
        let { piece, board, x, y } = this.state
        let newpiece = { ...piece }
        let { value, row, col } = newpiece
        let newboard = board.map(element => [...element])
        
        if(newboard[row + y][col + x] === newboard[row + y +1][col + x]){
            this.combine(x, y)
        }
    }


    game = () => {

        let { board, piece } = this.state
        let newboard = board.map(element => [...element])
        setInterval(this.fall, 1000)



    }

    render() {
        let newboard = this.state.board.map(element => {
            let item = element.map(number => {
                return (
                    <div>
                        <p>
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
                            <h2>{this.state.score}</h2>
                        </div>
                        <div className='score'>
                            <h2>{this.state.score}</h2>
                        </div>
                    </div>
                    <div className='truelevel'>
                        <h3 className='margin-right'>Level {`${this.state.level}`} </h3>
                        <div className='level'>
                            <div className='level2'></div>
                        </div>
                    </div>
                </div>
                <div className='middle'>
                    <div className='next-item'>
                        <h4>Next Item</h4>
                        <Blocks numbers={this.state.random}/>
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