import React, { Component } from 'react';
import './Home.css'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            board: [
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0]
            ],
            piece: 64,
            x: 0,
            count: 0
        }
    }

    componentDidMount() {
        this.compareNumbers(8)

    }

    addPiece = () => {
        let { board } = this.state
        // board[1].splice(0, 1, 1024)
        board[1].splice(0, 1, 32)
        board[1].splice(1, 1, 64)
        // board[1].splice(2,1,64)
        board[0].splice(0, 1, 64)
        board[0].splice(1, 1, 64)
        board[0].splice(2,1,64)
        // board[0].splice(0, 1, 512)
        // board[3].splice(0, 1, 32)

    }

    compareNumbers = (num) => {

        let { board, piece, count } = this.state
        board[0].splice(num, 1, piece)
        var intervalID
        intervalID = setInterval(() => {
            if (board[0][num - count] === piece) {
                board[0].splice(num - count, 1, 0)
                count++
                // console.log(count)
                if (count <= 8) {
                    if(board[0][num-count] === 0){
                        board[0].splice(num,1,0)
                        board[0].splice(num - count, 1, piece)
                        console.log(board[0])
                        return this.setState({
                            board
                        })
                    } 
                    // meaning check to see if not equal 0
                    else {
                        //needs to check if Board[x][num] === board[x][num-1] and if it is create a variable that adds them together
                        // then use that variable to check the next item (board[x][num-2])
                        // repeat
                        // this.checkCollision()
                    }
                    // console.log(board)
                }
            } else {
                // this.checkingCollision()
            }
        }, 1000)
    }

    checkCollision = (num)=>{
        let { board, piece, x } = this.state
        if(board[x][num-1] === board[x][num]){
            board[x].splice(num,1,0)
            board[x].splice(num-1, 1, 0)
        }
    }

    render() {
        this.addPiece()
        // console.log(this.state.board)
        // this.compareNumbers(8)
        // console.log(this.state.board)
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