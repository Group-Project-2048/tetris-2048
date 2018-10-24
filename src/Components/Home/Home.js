import React, { Component } from 'react';
import './Home.css'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            board: this.createBoard(9, 4),
            piece: 64,
            x: 1, 
            count: 0
        }
    }

    // componentDidMount(){
    //     this.compareNumbers(8)
    //     this.clear()
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
        board[1].splice(0, 1, 32)
        board[1].splice(1, 1, 64)
        // board[1].splice(2,1,64)
        // board[2].splice(0, 1, 64)
        // board[0].splice(0, 1, 512)
        // board[3].splice(0, 1, 32)

    }

    compareNumbers = () => {
        
        let num = 8
        let { board, piece, count } = this.state
        board[0].splice(num - count, 1, piece)
        var intervalID 
        if (board[0][num - count] === piece) {
            intervalID =setInterval(()=>{
                        board[0].splice(num - count, 1, 0)
                        count++
                        board[0].splice(num - count, 1, piece)
                        console.log(board[0])
                    },1000)
                    this.setState({
                        intervalID: intervalID
                    })
                
                } else {
                    this.checkingCollision()
                }
            
        
    }

    clear(){
        if(this.state.count === 8){
            clearInterval(this.state.intervalID)
        }
    }



    // fallingPiece = (num) => {
    //     let { board, piece, x } = this.state

    //     if(num === 0){return board}
    //     // The max array.length is 9, so the max index would be 8
    //     if( board[x][num-1] === 0){
    //             board[x].splice(num,1,0)
    //             board[x].splice(num-1,1,piece)
    //         // My thought process was incorrect, because of recursion.  If it was a for loop, 
    //         // I would have been able to see the path that it goes, but here, it just goes straight to the end... 
    //         // I don't know how I would fix that.
    //         console.log('if board = 0', board)
    //     } else if (board[1][num-1] === board[1][num]){
    //         board[x].splice(num,1,0)
    //         board[x].splice(num-1, 1, piece*2)

    //         // Another problem we face is getting additional numbers to add up like a chain.
    //         console.log('if board is equal', board)
    //     }

    //     this.fallingPiece(num-1)

    // }



    render() {
        console.log(this.state.count)
        this.addPiece()
        console.log(this.state.board)
        
        // this.compareNumbers(8)
        // this.fallingPiece(8)
        // mapping over board to create the numbers.
        // setInterval(this.compareNumbers, 1000, 8)
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