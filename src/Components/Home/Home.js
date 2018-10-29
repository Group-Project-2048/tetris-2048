import React, { Component } from 'react';
import './Home.css'

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

    randomPiece = () => {
        var blocks = []
    }

    fall = () => {
        // this.checkBelow()
        // this.checkCollision()

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

        // verifies that the row bellow it is occupied by zeros, and if not, the piece will stop.
        // for (row = 0; row < piece.length; row++) {
        //     for (col = 0; col < piece[row].length; col++) {
        //         if (piece[row][col] !== 0) {
        //             if (newboard[row + piece] !== 0 &&
        //                 newboard[col + piece] !== 0) {
        //                 //the space is taken
        //             }
        //         }
        //      }
        // }
            
    }}

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

                // verifies that the row bellow it is occupied by zeros, and if not, the piece will stop.
        // for (row = 0; row < piece.length; row++) {
        //     for (col = 0; col < piece[row].length; col++) {
        //         if (piece[row][col] !== 0) {
        //             if (newboard[row + piece] !== 0 &&
        //                 newboard[col + piece] !== 0) {
        //                 //the space is taken
        //             }
        //         }
        //      }
        // }
    }

    checkCollision = () => {
        // if one combines, we need to shift the piece down that was combined
        // if combined, the piece that fell is no longer there
        /* 
        function combine(num1, num2){
            return num1 + num2
        }

        function stack(newboard, piece){
            
        }
        
        if(piece === newboard[col][row]){
            newboard[col][row] += piece
             the piece that fell is now equal to 0 so that other pieces can fall through it
             if(matchesBelow === false){
                 stack()
             } else {
                 combine()
             }
        } 
        */
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
                    <p>
                        {number}
                    </p>

                )
            })
            return (
                item
            )
        })

        return (
            <div className='container'>
                <div className='top-bar'>
                    Level Next Item Score LeaderBoard Pause
                </div>
                <div className='actual-grid'>

                    {newboard}
                </div>
            </div>
        )
    }
}

export default Home;