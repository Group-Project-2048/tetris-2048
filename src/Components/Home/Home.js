import React, { Component } from 'react';
import Blocks from './Blocks/Blocks';
// import './Home.css'
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
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ],
            //block class that consists of the pieces like below
            piece: { row: 0, col: 1, value: 64 },
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
        //this will change the row of the piece
        //check somehow to see if it needs another piece to fall
        //this would be the set interval 
        let { piece, board, x, y } = this.state
        let newpiece = { ...piece }
        let { value, row, col } = newpiece
        let newboard = [...board]
        if (y >= 0 && y <= 8) {
            // figure out a way to check below everytime this moves down 
            // this.checkBelow()
            newboard[0][col + x] = 0
            newboard[row + y][col + x] = value
            if (y >= 1) {
                newboard[row + y - 1][col + x] = 0
                newboard[row + y][col + x] = value
            }
            let movedown = y + 1
            this.setState({
                board: newboard,
                y: movedown
            })
            console.log(newboard[7][1])
            // }
            //     else if(y === 8 && newboard[row+y][col+x] === 0){
            //         newboard[row+y][col+x] = 0
            //         newboard[8][col+x] = value
            //         this.setState({
            //             board: newboard,
            //         })
            //     }

        }
    }

    checkBelow = () => {
        //this will check to see if the row below has any pieces
        //if it does, it the same value? or if not, place/ bottom? place
        // if anything happens, then we need to invoke the check above function to start a new piece
        let { piece, board, y, x } = this.state
        let newboard = [...board]
        let newpiece = { ...piece }
        let { value, row, col } = newpiece
        // console.log('done')
        console.log(newboard[8][1])
        // newboard[8][1] = 64
        // console.log(newboard[row+y][col+x])
        // console.log(newboard[row+y+1][col+x])
        // if(newboard[row+y+1][col+x] === newboard[row+y][col+x]){
        // console.log(newboard[row+y+1][col+x])
        // console.log(newboard[row][col+x])
        // }
        //this.checkCollision() if they drop next to a piece.
    }

    checkCollision = () => {
        // if one combines, we need to shift the piece down that was combined

    }

    game = () => {

        let { board, piece } = this.state
        let newboard = [...board]
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