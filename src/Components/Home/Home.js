import React, { Component } from 'react';
import './Home.css'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            board: this.createBoard(12, 4)
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




    render() {
        console.log(this.state.board)
        let newboard = this.state.board.map(element => {
            let item = element.map(number => {
                return(
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