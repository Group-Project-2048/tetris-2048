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

    compareNumbers = (num) => {

        let { board, piece, count, x } = this.state
        let newboard = [...board]
        newboard[x][8] = piece
        var intervalID
        intervalID = setInterval(() => {
            if (newboard[x][num - count] === piece) {
                newboard[x][num - count] = 0
                count++
                if (count <= 8) {
                    if (newboard[x][num - count] === 0) {
                        newboard[x][num] = 0
                        newboard[x][num - count] = piece
                        // this.checkCollision(0) 
                        this.setState({
                            board: newboard
                        })
                        if (newboard[x][0] !== 0) {
                            console.log('does this work')
                            console.log(newboard[x])
                            // this.compareNumbers(8)
                        }
                        // setTimeout(this.compareNumbers(8), 1000)
                    }
                    // meaning check to see if not equal 0
                    //needs to check if Board[x][num] === board[x][num-1] and if it is create a variable that adds them together
                    // then use that variable to check the next item (board[x][num-2])
                    // repeat
                    // }
                    // console.log(board)
                }
            } else {
                // this.checkingCollision()

            }
        }, 1000)
    }

    checkCollision = (num) => {
        // let { board, piece, x, count } = this.state
        // let newboard = [...board]
        // count = 0
        // if (newboard[x][num] === newboard[x][num - count]) {
        //     newboard[x][num] = piece + newboard[x][num]
        //     this.setState({
        //         board: newboard
        //     })
        //     count++
        // } else {
        // }

        this.compareNumbers(8)

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