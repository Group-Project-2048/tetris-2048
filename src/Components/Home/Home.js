import React, { Component } from 'react';
import Blocks from './Blocks/Blocks';
import '../../Styles/Home.scss'
import leaderboardimg from '../../Images/Group-03.png'
import Axios from 'axios';
import keydown, { Keys } from 'react-keydown'
import ReactDOM from 'react-dom';


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            board: [
                // [0, 32, 0, 0],
                // [0, 0, 0, 0],
                // [0, 0, 0, 0],
                // [0, 0, 0, 0],
                // [0, 0, 0, 0],
                // [0, 0, 0, 0],
                // [0, 0, 32, 0],
                // [0, 32, 64, 32],
                // [32, 64, 32, 8]
             [0, 32, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 32, 0, 0],
            [0, 64, 0, 0],
            [0, 128, 0, 0],
            [0, 256, 0, 0],
            [0, 512, 0, 0]
                // [0, 32, 0, 0],
                // [0, 0, 0, 0],
                // [0, 32, 0, 0],
                // [0, 64, 0, 0],
                // [0, 128, 0, 0],
                // [0, 256, 0, 0],
                // [32, 512, 0, 0],
                // [64, 1024, 4, 0],
                // [8, 2, 64, 32]
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
            piece: { row: 0, col: 1, value: 32 },
            y: 0,
            x: 0,
            z: 0,
            level: 1,
            pointsToLevel: 600,
            score: 0,
            shadowScore: 0,
            scorePercentageMet: 0,
            nextitem: '',
            swapitem: 32,
            random: '',
            numbers: [2, 4, 8, 16, 32, 64, 'W'],
            highestScore: [],
            // count: 0
            // initialStart: this.state.board[0][1],
            nextItem: 64,
            swapItem: 32,
            multiplier: 1,
            key: 'n/a',
            setIntervalID: 0
        }
    }

    componentDidMount() {
        this.game()
        this.handleRandomNumber(this.state.numbers)
        this.focusDiv()
        //Work in progress
        this.handleScoreBar(this.state.score)
        this.handleIncreaseLevel(this.state.pointsToLevel)
    }
    
    componentDidUpdate(prevProps, prevState){
        if(prevProps.pause !== this.props.pause){
            if(this.props.pause){
                clearInterval(this.state.setIntervalID)
                console.log(this.state.setIntervalID)
            }
            else {
                this.game()
            }
        }
        
        if(prevState.shadowScore !== this.state.shadowScore){
            if(this.state.shadowScore){
                this.handleScoreBar(this.state.shadowScore)
                this.handleIncreaseLevel(this.state.pointsToLevel)
            }
        }
        
        
    }
    
    game = () => {
        let { board, piece } = this.state
        
        
        let id = setInterval(this.fall, 1000)
        this.setState({
            setIntervalID: id
        })
        
        //This interval is to test the handleScoreBar and handleIncreaseLevel methods
        setInterval(this.increaseScore, 1000)
        //***Testing for score bar */
        this.handleGetHighScore()
        this.handleScoreBar(this.state.score)
        this.handleIncreaseLevel(this.state.pointsToLevel)
        
        console.log(this.state.nextItem)
        
    }
    
    changeColumn = () => {
        var { piece, key, board,x,y } = this.state
        var newboard = board.map(element => [...element])
        var newpiece = {...piece}
        var {value, row, col} = newpiece
       
            switch(key){
                
                case 37: 
                if(x>=0 && newboard[row+y][col+x-1]===0 && y < 8){
                    newboard[row+y][col+x]= 0
                    let left = x-1
                    this.setState({
                        board: newboard,
                        x: left,
                        key: 'n/a'
                    })
                }
              
                //if the piece was moved to the left or the right the piece before should equal 0
                // if the piece is moved it should be able to move again to a different place.
                // x = 0 
                console.log(x)
                break
                case 39: 
                //for some reason it is adding multiple times
                // x=0
                if(x<2 && newboard[row+y][col+x+1]===0 && y < 8){
                    newboard[row+y][col+x] = 0
                    console.log(x)
                    let right = x+1
                    
                    this.setState({
                        board: newboard,
                       x: right,
                       key: 'n/a'
                    })
                    console.log(x)
                }
                



                break;
                default:
                break;
                
            
        }
            
        
        
    }
    
    
    //This method is to test the handleScoreBar and handleIncreaseLevel methods
    increaseScore = () => {
        
        this.setState({
            score: this.state.score + 100,
            shadowScore: this.state.shadowScore + 100
        })
        // console.log(this.state.score)
        // console.log(this.state.shadowScore)
    }
    
    
    handleRandomNumber = (arr) => {
        let randomNumber = arr[Math.floor(Math.random() * arr.length)];
        this.setState({
            random: randomNumber
        })
    }
    
    handleScoreBar = (num) => {
        let percentageMet = ((1.00 - (((this.state.pointsToLevel - num) / this.state.pointsToLevel).toFixed(2))).toFixed(2) * 100);
        
        // console.log(percentageMet)
        this.setState({
            scorePercentageMet: percentageMet
        })
        
        // console.log(this.state.scorePercentageMet)
    }
    
    handleIncreaseLevel = (num) => {
        if(this.state.shadowScore > num){
            this.setState({
                pointsToLevel: num * 2,
                shadowScore: 0,
                level: this.state.level + 1,
                scorePercentageMet: '0%'
            })
            // console.log(this.state.pointsToLevel)
            
        }
    }
    
    handleGetHighScore = () => {
        Axios.get('/api/getHighScore').then(res => {
            let newRes = res.data[0].score
            this.setState({
                highestScore: newRes
            })
        })
    }
    
    
    fall = () => {
        // this.changeColumn()
        this.changeColumn()
        let { piece, board, x, y } = this.state
        let newpiece = { ...piece }
        let { value, row, col } = newpiece
        let newboard = board.map(element => [...element])
        newboard.forEach(row => {
            row.forEach(column => {
                let newpiece = { ...piece }
                var { value, row, col } = newpiece
                let newboard = board.map(element => [...element])
                if (y >= 0 && y <= 8) {
                    if (y >= 0 && y <= 7) {
                        //before it moves down we want it to check first
                        // basic movement 
                        if (newboard[row + y + 1][col + x] === 0) {
                            // console.log(newpiece)
                            newboard[row + y][col + x] = 0
                            // console.log('hello', x)
                            newboard[row + y + 1][col + x] = value
                            var movedown = y + 1
                            this.setState({
                                board: newboard,
                                y: movedown,
                                piece: newpiece
                            })
                            
                        }
                        // combine movement
                        else if (newboard[row + y][col + x] === newboard[row + y + 1][col + x]) {
                            // newboard + newboard(1) = new value
                            // newvalue = newboard(1)
                            // newboard = 0
                            newboard[row + y][col + x] = 0
                            newboard[row + y + 1][col + x] = value * 2
                            newpiece.value = value * 2
                            if (newboard[row + y + 1][col + x] === 2048) {
                                newboard[row + y + 1][col + x] = 0
                            }
                            movedown = y + 1
                            this.setState({
                                board: newboard,
                                y: movedown,
                                piece: newpiece
                            })
                        } else if (newboard[row + y][col + x] !== newboard[row + y + 1][col + x]){
                            console.log('hello as well')
                            //the function would go here as well.
                        }
                        
                        
                        
                        
                    } else {
                        // I'm pretty sure I'd put the function in here.
                        console.log('hello')
                        // let movedown = y
                        // this.setState({
                        //     board: newboard,
                        //     y: movedown
                        // })
                        alert('hello')
                    }
                    
                }
                
            })
        })
    }
    
    onKeyDown = (e) => {
        // console.log(e.which)
        this.setState({
            key: e.which
        })
    }
    
    focusDiv() {
        ReactDOM.findDOMNode(this.refs.theDiv).focus()
    }
    
    render() {
        // console.log('key', this.state.key)
        let newboard = this.state.board.map((el, i) => {
            let item = el.map(number => {
                return (
                    <div>
                        <p className={`num-${number}`}>
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
            <section className='container' ref="theDiv" onKeyDown={(e) => this.onKeyDown(e)} tabIndex="1">
                <header className='top-bar'>
                    <section className='leaderboard-score'>
                        <div className='leaderboard'>
                            <img id='leader' src={leaderboardimg} alt="" />
                            <h3>{this.state.highestScore}</h3>
                        </div>
                        <div className='score'>
                            <h2>{this.state.score}</h2>
                        </div>
                    </section>
                    <section className='truelevel'>
                        <h3 className='margin-right'>Level {`${this.state.level}`} </h3>
                        <div className='level'>
                            <p className='level2' style={{width: this.state.scorePercentageMet + '%'}}></p>
                        </div>
                    </section>
                </header>
                <section className='middle'>
                    <div className='next-item'>
                        <h4>Next Item</h4>
                        <Blocks numbers={this.state.random} />
                    </div>
                    <section className='actual-grid' >
                        {newboard}
                    <article id='game-over'>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </article>
                    </section>
                    <section className='swap-item'>
                        <h4>Swap Item</h4>
                        <div>
                            <p>{this.state.swapitem}</p>
                        </div>
                    </section>
                </section>
            </section>
        )
    }
}

export default Home;