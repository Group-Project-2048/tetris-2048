import React, { Component } from 'react';
import Blocks from './Blocks/Blocks';
import '../../Styles/Home.scss'
import leaderboardimg from '../../Images/Group-03.png'
import Axios from 'axios';
import keydown, { Keys } from 'react-keydown'
import ReactDOM from 'react-dom';
import swal from 'sweetalert2'


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            board: [
                [0, 32, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]

            ],
            piece: { row: 0, col: 1, value: 32 },
            y: 0,
            x: 0,
            z: 0,
            level: 1,
            pointsToLevel: 600,
            score: 0,
            shadowScore: 0,
            scorePercentageMet: 0,
            swapitem: 32,
            random: '',
            revolver: [2, 32],
            numbers: [2, 4, 4, 8, 8, 16, 16, 32, 32, 64, 64, 'W', 'BOMB'],
            highestScore: [],
            nextItem: 64,
            swapItem: 32,
            multiplier: 1,
            key: 'n/a',
            setIntervalID: 0,
            gameover: false,
            rereset: false,
            revolved: false
        }
    }

    componentDidMount() {
        this.game()
        //Work in progress
        this.focusDiv()
        this.handleScoreBar(this.state.score)
        this.handleIncreaseLevel(this.state.pointsToLevel)
    }

    componentDidUpdate(prevProps, prevState, nextState) {
        if (prevProps.pause !== this.props.pause) {
            if (this.props.pause) {
                clearInterval(this.state.setIntervalID)
                console.log(this.state.setIntervalID)
            }
            else {
                this.game()
            }
        }

        if (prevProps.reset !== this.props.reset) {
            if (this.props.reset) {
                let newpiece = { ...this.state.piece }
                newpiece.value = this.state.revolver[1]
                this.setState({
                    board: [
                        [0, newpiece.value, 0, 0],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0]],
                    score: 0,
                    y: 0,
                    piece: newpiece
                })
            }
        }

        if (prevState.shadowScore !== this.state.shadowScore) {
            if (this.state.shadowScore) {
                if (prevState.shadowScore !== this.state.shadowScore) {
                    if (this.state.shadowScore) {
                        this.handleScoreBar(this.state.shadowScore)
                        this.handleIncreaseLevel(this.state.pointsToLevel)
                    }
                }
            }
        }

        if (prevState.gameover !== this.state.gameover) {
            if (this.state.gameover) {
                clearInterval(this.state.setIntervalID)
            } else {
                this.game()
            }
        }

        if (prevState.rereset !== this.state.rereset) {
            if (this.state.rereset) {
                let newpiece = { ...this.state.piece }
                newpiece.value = this.state.revolver[1]
                this.setState({
                    board: [
                        [0, newpiece.value, 0, 0],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0]],
                        score: 0,
                        y:0,
                        piece: newpiece,
                        rereset: false
                    })
                }
            } 
        }

    game = () => {
        let { board, piece } = this.state

        let time = 900-(this.state.level*10 > 600 ? 600 : this.state.level*10)
        let id = setInterval(this.fall, time)
        console.log(time)
        this.setState({
            setIntervalID: id
        })

        //This interval is to test the handleScoreBar and handleIncreaseLevel methods
        // setInterval(this.increaseScore, 1000)
        //***Testing for score bar */
        this.handleGetHighScore()
        this.handleScoreBar(this.state.score)
        this.handleIncreaseLevel(this.state.pointsToLevel)
        // console.log(this.state.nextItem)

    }

    fall = () => {
        this.changeColumn()
        let { piece, board, x, y, score, shadowScore} = this.state
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
                        if (piece.value !== 'W' && piece.value !== 'BOMB') {
                            if (newboard[row + y + 1][col + x] === 0) {
                                newboard[row + y][col + x] = 0
                                newboard[row + y + 1][col + x] = value
                                var movedown = y + 1
                                this.setState({
                                    board: newboard,
                                    y: movedown,
                                    piece: newpiece
                                })
                            }
                            else if (newboard[row + y][col + x] === newboard[row + y + 1][col + x]) {
                                newboard[row + y][col + x] = 0
                                newboard[row + y + 1][col + x] = value * 2
                                newpiece.value = value * 2
                                // console.log(newpiece.value)
                                let newscore = score + newpiece.value
                                let newshadow = shadowScore + newpiece.value
                                if (newboard[row + y + 1][col + x] === 2048) {
                                    newboard[row + y + 1][col + x] = 0
                                }
                                movedown = y + 1
                                this.setState({
                                    board: newboard,
                                    y: movedown,
                                    piece: newpiece,
                                    score: newscore,
                                    shadowScore: newshadow
                                })
                                // console.log(score, shadowScore)
                                
                            } else if (newboard[row + y][col + x] !== newboard[row + y + 1][col + x]) {
                                if (y <= 2) {
                                    this.gameover()
                                }
                                this.setState({
                                    stopped: true
                                })
                                this.reDrop()
                            }
                        } else if (piece.value === 'W') {
                            if (newboard[row + y + 1][col + x] === 0) {
                                newboard[row + y][col + x] = 0
                                newboard[row + y + 1][col + x] = value
                                movedown = y + 1
                                this.setState({
                                    board: newboard,
                                    y: movedown,
                                    piece: newpiece
                                })
                            } else if (newboard[row + y][col + x] !== newboard[row + y + 1][col + x]) {
                                // console.log('hello')
                                newboard[row + y][col + x] = 0
                                newpiece.value = newboard[row + y + 1][col + x]
                                let doubled = newpiece.value * 2
                                let newscore = score + doubled
                               let newshadow = shadowScore + doubled
                                newboard[row + y + 1][col + x] = doubled
                                newpiece.value = doubled
                                if (newboard[row + y + 1][col + x] === 2048) {
                                    newboard[row + y + 1][col + x] = 0
                                }
                                movedown = y + 1
                                // console.log(score, shadowScore)
                                this.setState({
                                    board: newboard,
                                    y: movedown,
                                    piece: newpiece,
                                    score: newscore,
                                    shadowScore: newshadow
                                })
                            }
                        } else if (piece.value ==='BOMB'){
                            console.log('hello')
                            if (newboard[row + y + 1][col + x] === 0) {
                                newboard[row + y][col + x] = 0
                                newboard[row + y + 1][col + x] = value
                                var movedown = y + 1
                                this.setState({
                                    board: newboard,
                                    y: movedown,
                                    piece: newpiece
                                })
                            }
                            else if (newboard[row + y][col + x] !== newboard[row + y + 1][col + x]) {
                                // console.log('hello')
                                newboard[row + y][col + x] = 0
                                newboard[row + y + 1][col + x] = 0
                                this.setState({
                                    board: newboard,
                                    piece: newpiece
                                })
                                this.reDrop()
                            }
                        }

                    } else {
                        // console.log('asdfh')
                        if (piece.value === 'W') {
                        
                            newpiece.value = 0
                            newboard[row + y][col + x] = 0
                            this.setState({
                                board: newboard,
                                piece: newpiece,
                                stopped: true
                            })
                            this.reDrop()
                        }
                        else if(piece.value ==='BOMB'){
                            newpiece.value = 0
                            newboard[row+y][col+x] = 0
                            this.setState({
                                board:newboard,
                                piece: newpiece
                            })
                            this.reDrop()
                        }
                        else {
                            this.reDrop()
                            this.setState({
                                stopped: true
                            })
                        }
                    }
                }
            })
        })
    }

    changeColumn = () => {
        var { piece, key, board, x, y } = this.state
        var newboard = board.map(element => [...element])
        var newpiece = { ...piece }
        var { value, row, col } = newpiece

        switch (key) {
            case 37:
                if (x >= 0 && newboard[row + y][col + x - 1] === 0 && y < 8) {
                    newboard[row + y][col + x] = 0
                    let left = x - 1
                    this.setState({
                        board: newboard,
                        x: left,
                        key: 'n/a'
                    })
                }
                break
            case 39:
                if (x < 2 && newboard[row + y][col + x + 1] === 0 && y < 8) {
                    newboard[row + y][col + x] = 0
                    let right = x + 1
                    this.setState({
                        board: newboard,
                        x: right,
                        key: 'n/a'
                    })
                }
                break;
            // case 40:
            //  let down = y+1
            //  newboard[row+y][col+x] = 0
            //  this.setState({
            //      board: newboard,
            //      y: down,
            //      key: 'n/a'
            //  })

            default:
                break;
        }
    }

    reDrop = () => {
        let random = this.handleRandomNumber(this.state.numbers)
        let { piece, board, x, y, revolver } = this.state
        let newpiece = { ...piece }
        let { value, row, col } = newpiece
        let newboard = board.map(element => [...element])
        let newRevolver = [...revolver]
        newRevolver.splice(1, 1, newRevolver[0])
        newRevolver[0] = random;
        newpiece.value = newRevolver[1]
        newboard[0][1] = newRevolver[1]

        this.setState({
            x: 0,
            y: 0,
            piece: newpiece,
            board: newboard,
            stopped: false,
            revolved: true,
            revolver: newRevolver
            // random: randomNumber,

        })
    }

    gameover = () => {
        let { piece, board, x, y } = this.state
        let newpiece = { ...piece }
        let { value, row, col } = newpiece
        let newboard = board.map(element => [...element])
        if (newpiece.value !== newboard[row + y + 1][col + x]) {
            this.setState({
                gameover: true
            })
            swal({
                title: 'Game Over',
                text: "Play Again?",
                showCancelButton: true,
                allowOutsideClick: false,
                allowEscapeKey:false,
                confirmButtonColor: '#FF0A15',
                cancelButtonColor: '#467fff',
                confirmButtonText: 'Yes',
                cancelButtonText: 'No'
            }).then((result) => {
                if(result.dismiss){
                    swal({ 
                    title: 'Exit',
                    text: 'Where to?',
                    showCancelButton: true,
                    allowOutsideClick: false,
                    allowEscapeKey:false,
                    confirmButtonColor: '#FF0A15',
                    cancelButtonColor: '#467fff',
                    confirmButtonText: 'Exit',
                    cancelButtonText: 'Boards'
                }).then((result) => {
                    if(result.value){
                        this.props.history.push('/') 
                    }
                    else if(result.dismiss){
                        this.props.history.push('/leader')
                    }
                })
                }
                this.setState({
                    rereset: true,
                    gameover: false
                })
            })
        } 
    }

    onKeyDown = (e) => {
        this.setState({
            key: e.which
        })
    }

    focusDiv = () => {
        ReactDOM.findDOMNode(this.refs.theDiv).focus()
    }
    
    handleRandomNumber = (arr) => {
        let randomNumber = arr[Math.floor(Math.random() * arr.length)];
        return randomNumber
    }

    //////////////////score and level methods ///////////////////////
    
    //This method is to test the handleScoreBar and handleIncreaseLevel methods
    increaseScore = () => {
        
        this.setState({
            score: this.state.score + 100,
            shadowScore: this.state.shadowScore + 100
        })
        // console.log(this.state.score)
        // console.log(this.state.shadowScore)
    }
    
    handleScoreBar = (num) => {
        let percentageMet = ((1.00 - (((this.state.pointsToLevel - num) / this.state.pointsToLevel).toFixed(2))).toFixed(2) * 100);
        
        this.setState({
            scorePercentageMet: percentageMet
        })
    }
    
    handleIncreaseLevel = (num) => {
        if (this.state.shadowScore > num) {
            this.setState({
                pointsToLevel: num * 2,
                shadowScore: 0,
                level: this.state.level + 1,
                scorePercentageMet: '0%'
            })
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
    //////////////////score and level methods ///////////////////////

    render() {
        
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
                <div className='blurryBack'>   

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
                            <p className='level2' style={{ width: this.state.scorePercentageMet + '%' }}></p>
                        </div>
                    </section>
                </header>
                <section className='middle'>
                    {/* <div className='next-item'>
                        <h4>Next Item</h4>
                        <Blocks numbers={this.state.revolver[0]} />
                    </div> */}
                    <div className='gameFrame'>

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

                    </div>
                    {/* <section className='swap-item'>
                        <h4>Swap Item</h4>
                        <div>
                            <p>{this.state.swapitem}</p>
                        </div>
                    </section> */}
                </section>
                    
                </div>
            </section>
        )
    }
}

export default Home;