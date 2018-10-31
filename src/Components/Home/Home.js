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
                // [0, 0, 0, 0],
                // [0, 0, 0, 0],
                // [0, 0, 0, 0],
                // [0, 0, 0, 0],
                // [0, 0, 0, 0],
                // [0, 0, 0, 0],
                // [0, 0, 0, 0],
                // [0, 0, 0, 0],
                // [0, 16, 0, 0]
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 32, 0, 0],
            [0, 64, 0, 0],
            [0, 128, 0, 0],
            [0, 256, 0, 0],
            [0, 512, 0, 0]
            ],

            // [0, 0, 0, 0],
            // [0, 0, 0, 0],
            // [0, 0, 0, 0],
            // [0, 16, 0, 0],
            // [0, 32, 0, 0],
            // [0, 64, 0, 0],
            // [0, 128, 0, 0],
            // [0, 256, 0, 0],
            // [0, 512, 0, 0]
            //block class that consists of the pieces like below
            // VALUE WILL BE A FN THAT TAKES A VALUE FROM OU LIST OF VALUES. (2 4 8 16 32 64 WILD)
            // piece: { row: 0, col: 1, value: rando()}
            piece: { row: 0, col: 1, value: 16 },
            y: 0,
            x: 0,
            z: 0,
            level: 1,
            score: 0,
            nextitem: '',
            swapitem: 32,
            random: '',
            numbers: [2, 4, 8, 16, 32, 64, 'W'],


            // count: 0
            // initialStart: this.state.board[0][1],
            nextItem: 64,
            swapItem: 32,
            multiplier: 1,
        }
    }
    
    componentDidMount() {
        this.game()
        this.handleRandomNumber(this.state.numbers)
        console.log(this.state.nextitem)
    }   

    game = () => {
        let { board, piece } = this.state
        let newboard = board.map(element => [...element])
        setInterval(this.fall, 1000) 
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
                if (y>=0 && y<=8){
                        if(y>=0 && y<=7){
                            var movedown = y+1
                            newboard[row + y][col + x] = 0  
                            this.setState({
                                board: newboard,     
                                y: movedown
                            })  
                        this.checkCollision()   
                        } else {
                            let movedown = y
                            this.setState({
                                board: newboard,
                                y: movedown
                            })  
                        }
                        newboard[row+y][col + x] = value    
                    }   

            })
        })            
    }

    checkCollision = () => {
        let { piece, board, x, y } = this.state
        let newpiece = { ...piece }
        let { value, row, col } = newpiece
        let newboard = board.map(element => [...element])
        
        if(newboard[row+y][col+x] === 0){
            newboard[row+y-1][col+x]=0
            newboard[row+y][col+x] = value
            this.setState({
                board: newboard
            })
        }
        else if(newboard[row + y][col + x] === value){
            this.combine(x, y)
          
            console.log('THIS IS Another THING', value, newboard[row+y][col+x])
         
        } else if (newboard[row+y][col+x] !== value){
            //stack
        }
    }

    combine = (a, b) =>{
        let { piece, board, x, y, z } = this.state
        let newpiece = { ...piece }
        let { value, row, col } = newpiece
        let newboard = board.map(element => [...element])
        a = x
        b = y

        var masterdigs = value + newboard[row+b][col+a]
        newpiece.value = masterdigs
        newboard[row+b-z][col+a] = 0
        newboard[row+b][col+a] = newpiece.value

        let pickle = newboard.map(element => [...element])
        let markdown = z++
        this.setState({
            board: pickle,
            piece: newpiece ,
            y:b,
            z: markdown
        })
    }

    render() {
        let newboard = this.state.board.map((el,i) => {
            let item = el.map(number => {
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