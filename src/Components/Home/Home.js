import React, { Component } from 'react';
import './Home.css'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            board: this.createBoard(9, 4),
            piece: 2
        }
    }

    // creating the board 
    createBoard = (y, x) => {
        var b = []
        for (var i = 0; i < x; i++) {
            b[i] = []
            for (var j = 0; j < y; j++)
                b[i][j] = 0
        }
        return b
    }

    addPiece = () => {
        let {board} = this.state
       board[1].splice(0, 1, 1024)
        board[2].splice(0, 1, 64)
        board[0].splice(0, 1, 512)
        board[3].splice(0, 1, 32)
        
    }

    fallingPiece = ()=>{
        let {board} = this.state
        // setTimeout()
        board[1].splice((board[1].length-1), 1, 32)
       
    }



    render() {
        console.log(this.state.board)
        // mapping over board to create the numbers.
        this.addPiece()
        this.fallingPiece()
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


        console.log(newboard)
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