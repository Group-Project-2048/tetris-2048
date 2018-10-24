import React, { Component } from 'react';
import './Home.css'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            board: this.createBoard(9, 4),
            piece: 64, 
            x: 1
        }
    }
    // componentDidMount(){
    //     var timerId;
    //     timerId = setInterval(()=>this.fallingPiece(8), 1000)
    //     this.setState({
    //         timerId: timerId
    //     })
    // }
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
        let { board } = this.state
        // board[1].splice(0, 1, 1024)
        board[1].splice(0,1, 2)
        board[1].splice(1,1,64)
        // board[1].splice(2,1,64)
        // board[2].splice(0, 1, 64)
        // board[0].splice(0, 1, 512)
        // board[3].splice(0, 1, 32)

    }

    fallingPiece = (num) => {
        let { board, piece, x } = this.state
        
        if(num === 0){return board}
        // The max array.length is 9, so the max index would be 8
        if( board[x][num-1] === 0){
             board[x].splice(num,1,0)
             board[x].splice(num-1,1,piece)
        } else if (board[1][num-1] === board[1][num]){
            board[x].splice(num,1,0)
            board[x].splice(num-1, 1, piece*2)
        }

        this.fallingPiece(num-1)

    }



    render() {
        this.addPiece()
        console.log(this.state.board)
        this.fallingPiece(8)
        // mapping over board to create the numbers.
        // setInterval(this.fallingPiece, 1000)
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