const {reDrop} = require('../Logic/logic');
const {handleDayBtn, handleMonthBtn, handleWeekBtn, handleOverall} = require('../Logic/logic');

const fake = {x: 2, y: 'whatup', piece: {row: 0, col: 1, value: 32}, board: [ [0, 32, 0, 0],
[0, 0, 0, 0],
[0, 0, 0, 0],
[0, 0, 0, 0],
[0, 32, 0, 0],
[0, 64, 0, 0],
[0, 128, 0, 0],
[0, 256, 0, 0],
[0, 512, 0, 0]], random: 4}
const fake2 = {x: 2, y: 4, piece: {row: 0, col: 1, value: 32}, board: [ [0, 32, 0, 0],
[0, 0, 0, 0],
[0, 0, 0, 0],
[0, 0, 0, 0],
[0, 32, 0, 0],
[0, 64, 0, 0],
[0, 128, 0, 0],
[0, 256, 0, 0],
[0, 512, 0, 0]], random: 64}

describe("it drops again somehow", ()=>{
    test('type of should return object', ()=>{
        expect(typeof(reDrop(fake))).toBe('object')
    })

    test('piece has a different value', ()=>{
        expect(reDrop(fake).piece.value).toBe(4)
    })
    test('initial board[0][1] = random', ()=>{
        expect(reDrop(fake).board[0][1]).toBe(4)
    })
    test('piece has a different different value', ()=>{
        expect(reDrop(fake2).piece.value).toBe(64)
    })

    test('an object is returned', ()=>{
        expect(reDrop(fake)).toBeTruthy()
    })
    
    test('the piece object has three properties', ()=>{
        expect(reDrop(fake).piece).toHaveProperty('row')
        expect(reDrop(fake).piece).toHaveProperty('col')
        expect(reDrop(fake).piece).toHaveProperty('value')
    })

    
    
    
})

//Jose Unit Tests

const fakeArray = [{id: 41, name: "Digory", score: 1392925, time_stamp: "2018-11-6"}, {id: 1, name: "Rab", score: 867659, time_stamp: "2018-11-5"}, {id: 31, name: "Evered", score: 817762, time_stamp: "2018-10-13"}, {id: 10, name: "Brigham", score: 794934, time_stamp: "2018-10-22"}]

describe('Leadership btns work', ()=> {

    test('handleDayBtn returns an array', ()=>{
        expect(typeof(handleDayBtn(fakeArray))).toBe('object')
    })

    test('dayBtn display highest score of the day', ()=>{
        // console.log(fakeArray)
        expect(handleDayBtn(fakeArray)).toEqual([{id: 41, name: "Digory", score: 1392925, time_stamp: "2018-11-6"}])
    })
    
    test('weekBtn displays highest score of the week', ()=>{
        expect(handleWeekBtn(fakeArray)).toEqual([{id: 41, name: "Digory", score: 1392925, time_stamp: "2018-11-6"}, {id: 1, name: "Rab", score: 867659, time_stamp: "2018-11-5"}])
    })
    
    test('monthBtn displays highest score of the month', ()=>{
        expect(handleMonthBtn(fakeArray)).toEqual([{id: 41, name: "Digory", score: 1392925, time_stamp: "2018-11-6"}, {id: 1, name: "Rab", score: 867659, time_stamp: "2018-11-5"}, {id: 31, name: "Evered", score: 817762, time_stamp: "2018-10-13"}, {id: 10, name: "Brigham", score: 794934, time_stamp: "2018-10-22"}])
    })
    
    test('monthBtn returns an array', ()=>{
        expect(typeof(handleMonthBtn(fakeArray))).toBe('object')
    })
})


describe("The toggle function toggle the boolean", ()=>{
    test('type of should return a boolean', ()=>{
        
    })
})
