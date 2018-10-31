import React, { Component } from 'react';
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
                [0, 32, 0, 0],
                [0, 64, 0, 0]
            ],
            //block class that consists of the pieces like below
            // VALUE WILL BE A FN THAT TAKES A VALUE FROM OU LIST OF VALUES. (2 4 8 16 32 64 WILD)
            // piece: { row: 0, col: 1, value: rando()}
            piece: { row: 0, col: 1, value: 32 },
            y: 0,
            x: 0,
            level: 99,
            score: 0,
            nextitem: 64,
            swapitem: 32,
            multiplier: 1,

            // LEVELS ON PROPS?
            // count: 0
            // initialStart: this.state.board[0][1],
            // A landed[] that is a duplicate of the board but with filled indices (plural of index)
            /*
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 1],
                [1, 0, 0, 1],
                [1, 0, 1, 1],
                [1, 1, 1, 1]
            */
           // blocks : 2,4,8,16,32,64,wild
        }
    }

    componentDidMount() {
        this.game()
        // ^ this is where we need to start our loop
        // loop should contain this.fall()

    }

    // componentDidUpdate(prevState){
    //     if(prevState !== this.state){
    //         this.setState({

    //         })
    //     }
    // }

    randomPiece = () => {
        var blocks = []
    }

    fall = () => {
        // this.checkCollision()
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
                        newboard[row+y][col + x] = 0
                        newboard[row+y+1][col+x] = value
                        let movedown = y+1
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

    combine = (num1, num2) =>{
        let { piece, board, x, y } = this.state
        let newpiece = { ...piece }
        let { value, row, col } = newpiece
        let newboard = board.map(element => [...element])
        if( num1 === num2){
            let num3 = num1 + num2
            newboard[row+y+1][col+x] = num3
            newboard[row+y][col+x] = 0
            this.setState({
                board: newboard
            })
            if(newboard[row+y+1][col+x]===newboard[row+y+2][col+x]){
                let num3 = newboard[row+y+1][col+x] + newboard[row+y+2][col+x]
                newboard[row+y+1][col+x] = 0
                newboard[row+y+2][col+x] = num3
                this.setState({
                    board: newboard
                })
                
            }
        }
    }


    checkCollision = () => {
        let { piece, board, x, y } = this.state
        let newpiece = { ...piece }
        var { value, row, col } = newpiece
        let newboard = board.map(element => [...element])
        
        if(newboard[row + y][col + x] === newboard[row + y +1][col + x]){
            let a = newboard[row + y][col + x]
            let b = newboard[row + y +1][col + x]
            this.combine(a, b)
        }

        //  else if(newboard[row + y][col + x] !== newboard[row + y +1][col + x]){
        //     stack()
        // } 
        


        // function stack(newboard, piece){
            
        // }


        // if one combines, we need to shift the piece down that was combined
        // if combined, the piece that fell is no longer there
        /* 
        function combine(num1, num2){
            return num1 + num2
        }


        
        if(piece === newboard[col][row]){
            newboard[col][row] += piece
             the piece that fell is now equal to 0 so that other pieces can fall through it
             if(matchesBelow === false){
                 stack()
             } else {
                 combine()
                 score()
             }
        } 
        */
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
                        <div className='piece'>
                            <p>{this.state.nextitem}</p>
                        </div>
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